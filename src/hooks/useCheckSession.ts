import { useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient'; // Ajusta la ruta según tu proyecto
import { useTaskStoreBase } from '../store/store';

export const useCheckSession = () => {
  const setUser = useTaskStoreBase((state) => state.setUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [setUser]);

  return loading;
};
