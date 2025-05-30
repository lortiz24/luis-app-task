import { useState } from 'react';
import { supabase } from '../config/supabaseClient';

export const useAuthLogic = () => {
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);

  const registerUser = async (fullName: string, email: string, password: string) => {
    setLoadingRegister(true);
    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase(),
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
    setLoadingRegister(false);
    if (error) {
      console.error('Error signing up: ', error);
      return { success: false, error };
    }
    return { success: true, data };
  };

  // Sign in
  const loginUser = async (email: string, password: string) => {
    setLoadingLogin(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password: password,
      });
      setLoadingLogin(false);
      if (error) {
        console.error('Sign-in error:', error.message);
        return { success: false, error: error.message };
      }
      return { success: true, data };
    } catch (error: any) {
      setLoadingLogin(false);
      console.error('Unexpected error during sign-in:', error.message);
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again.',
      };
    }
  };

  // Sign out
  async function signOut() {
    setLoadingLogout(true);
    const { error } = await supabase.auth.signOut();
    setLoadingLogout(false);
    if (error) {
      console.error('Error signing out:', error);
    }
  }

  return {
    registerUser,
    loginUser,
    signOut,
    loadingRegister,
    loadingLogin,
    loadingLogout,
  };
};
