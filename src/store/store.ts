import { create } from 'zustand';
import type { AuthSlice } from './slices/authSlices';
import { createAuthSlice } from './slices/authSlices';

export const useTaskStoreBase = create<AuthSlice>()(createAuthSlice);

