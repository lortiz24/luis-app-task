import type { ITask } from '../../interfaces/task.interface';
import { TaskList } from '../task-list/TaskList';

interface List {
  id: string;
  title: string;
  // Agrega aquí otras propiedades de la lista si las tienes
}

interface CardOfTaskProps {
  list: List; // Recibe la información de la lista
  tasks: ITask[]; // Recibe las tareas de esta lista
  onTaskUpdate: (newTask: Partial<ITask>) => void; // Recibe la función de actualización
  // Podrías agregar onListEdit aquí si implementas esa funcionalidad en el futuro
}

export const CardOfTask = ({ list, tasks, onTaskUpdate }: CardOfTaskProps) => {
  return (
    <div className="flex flex-col h-auto min-h-30 bg-bg-2 w-90 rounded-3xl px-3 py-2">
      <div className="h-16 px-5 py-4 flex items-center text-lg font-semibold text-text">
        {list.title} {/* Usa el título de la prop list */}
      </div>
      <div className="mt-2  ">
        <TaskList tasks={tasks} onTaskUpdate={onTaskUpdate} /> {/* Pasa tasks y onTaskUpdate */}
      </div>
    </div>
  );
};
