import { useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import { useTaskStoreBase } from '../store/store';

export function useUserLists(userId: string | null) {
    console.log('userId', userId)
  const setLists = useTaskStoreBase((state) => state.setLists);

  useEffect(() => {
    if (!userId) return;
    const fetchLists = async () => {
      const { data, error } = await supabase.from('list').select('*').eq('user_id', userId);
      if (!error) setLists(data);
    };
    fetchLists();
  }, [userId, setLists]);
}
