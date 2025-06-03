import type { User } from '@supabase/supabase-js';
import type { SetAuthState } from '../interfaces/store.interface';

export interface AuthSlice {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  signOut: () => void;
  checking: boolean;
  setCheckin: (value: boolean) => void;
}

export const createAuthSlice = (set: SetAuthState, get: any, api: any): AuthSlice => ({
  user: undefined,
  setUser: (user) => set(() => ({ user, checking: false })),
  signOut: () => set(() => ({ user: undefined, checking: false })),
  checking: true,
  setCheckin: (value) => set(() => ({ checking: value })),
});
