import { useEffect } from 'react';
import { supabase } from '../config/supabaseClient'; // Ajusta la ruta según tu proyecto
import { useTaskStoreBase } from '../store/store';

export const useCheckSession = () => {
  const setUser = useTaskStoreBase((state) => state.setUser);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user);
    });
  }, []);
};
