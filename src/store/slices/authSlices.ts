import type { User } from '@supabase/supabase-js';

export interface AuthSlice {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  signOut: () => void;
  checking: boolean;
  setCheckin: (value: boolean) => void;
}

export const createAuthSlice = (set: (fn: (state: AuthSlice) => Partial<AuthSlice>) => void): AuthSlice => ({
  user: undefined,
  setUser: (user) => set(() => ({ user, checking: false })),
  signOut: () => set(() => ({ user: undefined, checking: false })),
  checking: true,
  setCheckin: (value) => set(() => ({ checking: value })),
});