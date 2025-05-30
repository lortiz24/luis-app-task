import React, { useState } from 'react';
import { AgendaDayColumn } from '../components/weekly-agenda/AgendaDayColumn';
import type { ITask } from '../interfaces/task.interface';
import { HeaderWeeklyAgenda } from '../components/weekly-agenda/HeaderWeeklyAgenda';

export const WeeklyAgenda: React.FC = () => {
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: '1',
      title: 'Reunión de equipo',
      description:
        'Revisar el progreso del proyecto y planificar las próximas tareas, incluyendo la asignación de responsabilidades, estimación de tiempos, identificación de dependencias y posibles riesgos. Preparar la presentación del estado actual para los stakeholders',
      completed: false,
      day: 'Lunes',
      time: '09:00',
      user_id: 'usuario1',
      list_id: 'lista1',
    },
    {
      id: '2',
      title: 'Completar diseño UI',
      description: 'Finalizar los mockups para la nueva funcionalidad',
      completed: true,
      day: 'Lunes',
      time: '14:30',
      user_id: 'usuario1',
      list_id: 'lista1',
    },
    {
      id: '3',
      title: 'Revisar emails',
      description: 'Responder correos pendientes',
      completed: false,
      day: 'Lunes',
      time: '10:00',
      user_id: 'usuario1',
      list_id: 'lista1',
    },
    {
      id: '4',
      title: 'Llamada con cliente',
      description: 'Presentar el avance del proyecto y recopilar feedback',
      completed: false,
      day: 'Martes',
      time: '10:00',
      user_id: 'usuario1',
      list_id: 'lista1',
    },
    {
      id: '5',
      title: 'Revisar código',
      description: 'Code review de las nuevas funcionalidades implementadas',
      completed: false,
      day: 'Martes',
      time: '16:00',
      user_id: 'usuario1',
      list_id: 'lista1',
    },
    {
      id: '6',
      title: 'Planificar sprint',
      description: 'Definir tareas para la próxima iteración',
      completed: false,
      day: 'Martes',
      time: '11:00',
      user_id: 'usuario1',
      list_id: 'lista1',
    },
    {
      id: '7',
      title: 'Documentación API',
      description: 'Actualizar la documentación de los nuevos endpoints',
      completed: false,
      day: 'Miércoles',
      time: '11:00',
      user_id: 'usuario1',
      list_id: 'lista1',
    },
    {
      id: '8',
      title: 'Testing QA',
      description: 'Ejecutar pruebas de calidad en el entorno de staging',
      completed: false,
      day: 'Jueves',
      time: '13:00',
      user_id: 'usuario1',
      list_id: 'lista1',
    },
    {
      id: '9',
      title: 'Deploy producción',
      description: 'Desplegar la nueva versión al entorno de producción',
      completed: false,
      day: 'Viernes',
      time: '15:00',
      user_id: 'usuario1',
      list_id: 'lista1',
    },
    {
      id: '10',
      title: 'Retrospectiva',
      description: 'Analizar qué funcionó bien y qué mejorar',
      completed: false,
      day: 'Viernes',
      time: '17:00',
      user_id: 'usuario1',
      list_id: 'lista1',
    },
  ]);

  const handleTaskUpdate = (updatedTask: Partial<ITask>) => {
    setTasks((prev) => prev.map((task) => (task.id === updatedTask.id ? { ...task, ...updatedTask } : task)));
  };

  const getTasksForDay = (day: string) => tasks.filter((task) => task.day === day);

  const getCompletedTasksCount = (day: string) => {
    const dayTasks = getTasksForDay(day);
    return dayTasks.filter((task) => task.completed).length;
  };

  const getCurrentDate = () => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    return startOfWeek;
  };

  const getDateForDay = (dayIndex: number) => {
    const startOfWeek = getCurrentDate();
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + dayIndex);
    return date.getDate();
  };

  const getSortedTasksForDay = (day: string) => {
    const dayTasks = tasks.filter((task) => task.day === day);

    // Separar tareas con hora y sin hora
    const tasksWithTime = dayTasks.filter((task) => task.time);
    const tasksWithoutTime = dayTasks.filter((task) => !task.time);

    // Ordenar tareas con hora por tiempo
    tasksWithTime.sort((a, b) => {
      if (!a.time || !b.time) return 0;
      return a.time.localeCompare(b.time);
    });

    // Retornar tareas con hora primero, luego sin hora
    return [...tasksWithTime, ...tasksWithoutTime];
  };

  return (
    <div className="h-full flex flex-col">
      <HeaderWeeklyAgenda
        total={tasks.length}
        completed={tasks.filter((task) => task.completed).length}
        pending={tasks.filter((task) => !task.completed).length}
      />

      <div className="flex-1 min-h-0 overflow-x-auto overflow-y-hidden">
        <div className="flex h-full">
          {daysOfWeek.map((day, idx) => (
            <AgendaDayColumn
              key={day}
              day={day}
              dayIndex={idx}
              tasks={getSortedTasksForDay(day)}
              onTaskUpdate={handleTaskUpdate}
              firstDay={idx === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
