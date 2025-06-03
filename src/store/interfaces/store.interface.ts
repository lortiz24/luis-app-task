import type { AuthSlice } from '../slices/authSlices';

export type SetAuthState = (fn: (state: AuthSlice) => Partial<AuthSlice>) => void;
