import type { ITask } from '../../interfaces/task.interface';

export const TaskItem = ({ task }: { task: ITask }) => {
  return (
    <div className="px-4 py-2 rounded-lg bg-bg flex flex-col gap-1">
      <p className="font-semibold text-xl">{task.title}</p>
      <p className="text-sm text-gray">{task.description}</p>
    </div>
  );
};
