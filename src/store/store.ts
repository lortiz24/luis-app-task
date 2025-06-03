import { create } from 'zustand';
import type { AuthSlice } from './slices/authSlices';
import { createAuthSlice } from './slices/authSlices';
import { createUserListsSlice, type UserListsSlice } from './slices/listSlices';

export const useTaskStoreBase = create<AuthSlice & UserListsSlice>((...a) => ({
  ...createAuthSlice(...a),
  ...createUserListsSlice(...a),
}));
