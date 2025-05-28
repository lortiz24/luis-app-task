import React, { useState } from "react";
import { CheckIcon, CheckCircleIcon } from "@heroicons/react/16/solid";
import type { ITask } from "../../interfaces/task.interface";

interface Props {
  task: ITask;
  onUpdate: (task: Partial<ITask>) => void;
}

export const AgendaTaskItem: React.FC<Props> = ({ task, onUpdate }) => {
  const [expanded, setExpanded] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  const handleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!task.completed) {
      onUpdate({ id: task.id, completed: true });
      setJustCompleted(true);
      setTimeout(() => setJustCompleted(false), 800);
    }
  };

  return (
    <div
      className={`p-3 rounded-lg bg-gray-800/50 flex items-start cursor-pointer transition-colors hover:bg-gray-700/50 ${
        expanded && "bg-pink-50/5"
      }`}
      onClick={() => setExpanded((e) => !e)}
      tabIndex={0}
      role="button"
    >
      <div className="flex flex-nowrap w-full box-border">
        <div className="relative mx-3 flex-shrink-0">
          <button
            className="cursor-pointer group relative w-7 h-7 flex items-center justify-center transition-all duration-200"
            onClick={handleComplete}
            tabIndex={-1}
          >
            {!task.completed ? (
              <>
                <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
                  <span className="w-5 h-5 border-2 border-gray-400 rounded-full block" />
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                </span>
              </>
            ) : (
              <span
                className={`absolute inset-0 flex items-center justify-center text-green-400 ${
                  justCompleted ? "animate-bounce" : ""
                }`}
              >
                <CheckCircleIcon className="w-5 h-5" />
              </span>
            )}
          </button>
        </div>
        <div className="flex flex-col gap-1 flex-1 pr-2">
          <div className="flex items-center justify-between">
            <p
              className={`font-semibold text-sm transition-colors ${
                task.completed ? "text-gray-400 line-through" : "text-gray-100"
              }`}
            >
              {task.title}
            </p>
            {task.scheduled_time && (
              <span className="text-xs text-blue-400 font-medium bg-blue-400/10 px-2 py-1 rounded">
                {task.scheduled_time}
              </span>
            )}
          </div>
          {task.description && (
            <p className={`text-xs text-gray-400 ${expanded ? "" : "line-clamp-2"}`}>{task.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
