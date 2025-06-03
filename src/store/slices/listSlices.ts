import type { IList } from '../../interfaces/list.interface';

export type UserListsSlice = {
  lists: IList[];
  setLists: (lists: IList[]) => void;
};

export type SetUserListsState = (fn: (state: UserListsSlice) => Partial<UserListsSlice>) => void;

export const createUserListsSlice = (set: SetUserListsState, get: any, api: any): UserListsSlice => ({
  lists: [],
  setLists: (lists) => set(() => ({ lists })),
});
