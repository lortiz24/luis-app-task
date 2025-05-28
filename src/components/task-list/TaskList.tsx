import type { ITask } from '../../interfaces/task.interface';
import { TaskItem } from '../task-item/TaskItem';

interface TaskListProps {
  tasks: ITask[];
  onTaskUpdate: (newTask: Partial<ITask>) => void;
}

export const TaskList = ({ tasks, onTaskUpdate }: TaskListProps) => {
  if (tasks.length === 0) {
    return <div className="text-gray">No hay tareas</div>;
  }
  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <li key={task.id || task.title + task.description}>
          <TaskItem task={task} onUpdate={onTaskUpdate} />
        </li>
      ))}
    </ul>
  );
};
