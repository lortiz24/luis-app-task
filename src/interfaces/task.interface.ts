export interface ITask {
  id: string;
  title: string;
  description?: string;
  user_id: string;
  list_id: string;
  scheduled_date?: string; // formato 'YYYY-MM-DD', solo para tareas no repetidas
  scheduled_time?: string; // formato 'HH:mm:ss', solo para tareas no repetidas
  create_at?: string; // timestamp en formato ISO
  update_at?: string; // timestamp en formato ISO
  completed: boolean
}
