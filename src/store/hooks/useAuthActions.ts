import { useTaskStoreBase } from '../store';

export const useAuthActions = () => {
  const setCheckin = useTaskStoreBase((state) => state.setCheckin);
  const setUser = useTaskStoreBase((state) => state.setUser);
  const signOut = useTaskStoreBase((state) => state.signOut);
  return {
    setCheckin,
    setUser,
    signOut,
  };
};
