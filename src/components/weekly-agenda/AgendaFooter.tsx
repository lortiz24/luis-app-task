import React from "react";
import type { ITask } from "../../interfaces/task.interface";

export const AgendaFooter: React.FC<{ tasks: ITask[] }> = ({ tasks }) => (
  <div className="flex-shrink-0 p-4 border-t border-gray-700 bg-gray-800/50">
    <div className="flex justify-center space-x-8">
      <div className="text-center">
        <div className="text-xl font-bold text-blue-400">{tasks.length}</div>
        <div className="text-xs text-gray-400">Total</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-green-400">{tasks.filter((task) => task.completed).length}</div>
        <div className="text-xs text-gray-400">Completadas</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-orange-400">{tasks.filter((task) => !task.completed).length}</div>
        <div className="text-xs text-gray-400">Pendientes</div>
      </div>
    </div>
  </div>
);
