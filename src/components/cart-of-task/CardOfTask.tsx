import type { ITask } from '../../interfaces/task.interface';
import { TaskList } from '../task-list/TaskList';

interface List {
  id: string;
  title: string;
}

interface CardOfTaskProps {
  list: List;
  tasks: ITask[];
  onTaskUpdate: (newTask: Partial<ITask>) => void;
}

export const CardOfTask = ({ list, tasks, onTaskUpdate }: CardOfTaskProps) => {
  return (
    <div className="flex flex-col h-auto min-h-30 bg-bg-2 w-90 rounded-xl px-3 py-2">
      <div className="h-16 px-5 py-4 flex items-center text-lg font-semibold text-text">
        {list.title}
      </div>
      <div className="mt-2  ">
        <TaskList tasks={tasks} onTaskUpdate={onTaskUpdate} />
      </div>
    </div>
  );
};
