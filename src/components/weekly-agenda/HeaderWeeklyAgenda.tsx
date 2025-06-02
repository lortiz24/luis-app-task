import React from 'react';

interface HeaderWeeklyAgendaProps {
  total: number;
  completed: number;
  pending: number;
}

export const HeaderWeeklyAgenda: React.FC<HeaderWeeklyAgendaProps> = ({ total, completed, pending }) => {
  return (
    <div className="flex-shrink-0 p-6 0 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Agenda Semanal</h1>
        <p className="text-gray-400">Organiza tus tareas por día de la semana</p>
      </div>

      {/* Estadísticas */}
      <div className="flex space-x-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-light">{total}</div>
          <div className="text-xs text-gray-400">Total</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{completed}</div>
          <div className="text-xs text-gray-400">Completadas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{pending}</div>
          <div className="text-xs text-gray-400">Pendientes</div>
        </div>
      </div>
    </div>
  );
};
