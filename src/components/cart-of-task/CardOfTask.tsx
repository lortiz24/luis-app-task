import type { ITask } from '../../interfaces/task.interface';
import { TaskList } from '../task-list/TaskList';

interface CartOfTaskProps {
  title: string;
  tasks: ITask[];
}

export const CardOfTask = ({ title, tasks }: CartOfTaskProps) => {
  return (
    <div className="flex flex-col h-auto min-h-30 bg-bg-2 p-6 w-[300px] rounded-4xl">
      <div className="h-16 px-[20px] py-[14px] flex items-center text-lg font-semibold">
        {title}
      </div>
      <div className="mt-2 px-[20px]">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};
