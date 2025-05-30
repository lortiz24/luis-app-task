import type { User } from '@supabase/supabase-js';

export interface AuthSlice {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  signOut: () => void;
}

export const createAuthSlice = (set: (fn: (state: AuthSlice) => Partial<AuthSlice>) => void): AuthSlice => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
  signOut: () => set(() => ({ user: undefined })),
});