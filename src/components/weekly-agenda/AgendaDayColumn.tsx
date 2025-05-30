import React from "react";
import type { ITask } from "../../interfaces/task.interface";
import { TaskItem } from "../task-item/TaskItem";

interface Props {
  day: string;
  dayIndex: number;
  tasks: ITask[];
  onTaskUpdate: (task: Partial<ITask>) => void;
}

export const AgendaDayColumn: React.FC<Props> = ({ day, dayIndex, tasks, onTaskUpdate }) => {
  const sortedTasks = [
    ...tasks.filter((t) => t.scheduled_time).sort((a, b) => (a.scheduled_time! > b.scheduled_time! ? 1 : -1)),
    ...tasks.filter((t) => !t.scheduled_time),
  ];

  const completedCount = tasks.filter((t) => t.completed).length;
  const isToday = dayIndex === new Date().getDay() - 1;

  const getDateForDay = (dayIdx: number) => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + dayIdx);
    return date.getDate();
  };

  return (
    <div
      className={`flex-shrink-0 w-80 h-full border-r border-gray-700 flex flex-col ${
        isToday ? "bg-blue-500/5" : ""
      }`}
    >
      <div className={`p-4 border-b border-gray-700 ${isToday ? "border-blue-500" : ""}`}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className={`text-lg font-semibold ${isToday ? "text-blue-400" : "text-gray-100"}`}>{day}</h3>
            <p className="text-sm text-gray-400">{getDateForDay(dayIndex)}</p>
          </div>
          {tasks.length > 0 && (
            <div className="text-right">
              <div className="text-xs text-gray-400">
                {completedCount}/{tasks.length}
              </div>
              <div className="w-8 h-1 bg-gray-600 rounded-full mt-1">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-300"
                  style={{ width: `${(completedCount / tasks.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {sortedTasks.length > 0 ? (
          sortedTasks.map((task) => (
            <TaskItem key={task.id} task={task} onUpdate={onTaskUpdate} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p className="text-sm">No hay tareas programadas</p>
          </div>
        )}
      </div>
    </div>
  );
};
