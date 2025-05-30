import { supabase } from '../config/supabaseClient';

export const useAuthLogic = () => {
  const registerUser = async (fullName: string, email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase(),
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      console.error('Error signing up: ', error);
      return { success: false, error };
    }

    return { success: true, data };
  };

  // Sign in
  const loginUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password: password,
      });

      // Handle Supabase error explicitly
      if (error) {
        console.error('Sign-in error:', error.message);
        return { success: false, error: error.message };
      }

      // If no error, return success
      console.log('Sign-in success:', data);
      return { success: true, data }; // Return the user data
    } catch (error) {
      // Handle unexpected issues
      console.error('Unexpected error during sign-in:', error.message);
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again.',
      };
    }
  };
  // Sign out
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    }
  }
  return { registerUser, loginUser, signOut };
};
