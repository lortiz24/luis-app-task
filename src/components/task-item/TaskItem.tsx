import { useState } from 'react';
import type { ITask } from '../../interfaces/task.interface';
import Icon from '../icons/Icon';
import { CheckIcon } from '@heroicons/react/16/solid';

export const TaskItem = ({ task }: { task: ITask }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="py-2 rounded-lg bg-bg flex items-start "
      onClick={() => setExpanded((e) => !e)}
      tabIndex={0}
      role="button"
    >
      <div className="flex flex-nowrap w-full box-border transition-[padding-left] duration-250">
        <div className="relative mx-3 mt-[2px] flex-shrink-0 ">
          <button className="cursor-pointer group relative w-7 h-7 flex items-center justify-center transition-all duration-200">
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
              <Icon name="task-circle" size={20} />
            </span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <CheckIcon />
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <p className="font-semibold text-xl leading-none">{task.title}</p>
          <p className={`text-sm text-gray ${expanded ? '' : 'line-clamp-2'}`}>{task.description}</p>
        </div>
      </div>
    </div>
  );
};
