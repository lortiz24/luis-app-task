import React, { useState, useRef, useEffect } from 'react';
import type { ITask } from '../../interfaces/task.interface';
import { TaskCheckbox } from '../task-checkbox/TaskChecbox';

interface Props {
  task: ITask;
  onUpdate: (newTask: Partial<ITask>) => void;
}

export const TaskItem = ({ task, onUpdate }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (task.completed) {
      setJustCompleted(true);
      const timeout = setTimeout(() => setJustCompleted(false), 800);
      return () => clearTimeout(timeout);
    }
  }, [task.completed]);

  // Cierra el expandido al hacer click fuera
  useEffect(() => {
    if (!expanded) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expanded]);

  const handleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!task.completed) {
      onUpdate({ id: task.id, completed: true });
    }
  };

  return (
    <div
      ref={itemRef}
      className={`p-3 rounded-lg flex items-start cursor-pointer transition-colors hover:bg-gray-700/50 ${expanded ? 'bg-pink-50/5' : 'bg-bg'}`}
      onClick={() => setExpanded((e) => !e)}
      tabIndex={0}
      role="button"
    >
      <div className="flex flex-nowrap w-full box-border">
        <div className="relative mx-3 flex-shrink-0">
          <TaskCheckbox checked={task.completed} onClick={handleComplete} animating={justCompleted} size={20} />
        </div>
        <div className="flex flex-col gap-1 flex-1 pr-2">
          <div className="flex items-center justify-between">
            <p
              className={`font-semibold text-sm transition-colors ${
                task.completed ? 'text-gray-400 line-through' : 'text-gray-100'
              }`}
            >
              {task.title}
            </p>
            {task.time && (
              <span className="text-xs text-blue-400 font-medium bg-blue-400/10 px-2 py-1 rounded">
                {task.time}
              </span>
            )}
          </div>
          {task.description && (
            <p className={`text-xs text-gray-400 ${expanded ? '' : 'line-clamp-2'}`}>{task.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
