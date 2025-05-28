import type { ITask } from '../../interfaces/task.interface';
import { TaskItem } from '../task-item/TaskItem';

interface TaskListProps {
  tasks: ITask[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  if (tasks.length === 0) {
    return <div className="text-gray">No hay tareas</div>;
  }
  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task, idx) => (
        <li key={idx}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};
