"use client"

import type React from "react"

import { useState } from "react"
import { CheckIcon, CheckCircleIcon } from "@heroicons/react/16/solid"

// Interfaces
interface ITask {
  id: string
  title: string
  description?: string
  completed: boolean
  day: string
  time?: string // Nueva propiedad para la hora
}

// Icon component mock (since we don't have the actual Icon component)
const Icon = ({ name, className }: { name: string; className: string }) => {
  if (name === "task-circle") {
    return <div className={`border-2 border-gray-400 rounded-full ${className}`} />
  }
  return null
}

// TaskItem component (provided by user)
const TaskItem = ({ task, onUpdate }: { task: ITask; onUpdate: (newTask: Partial<ITask>) => void }) => {
  const [expanded, setExpanded] = useState(false)
  const [justCompleted, setJustCompleted] = useState(false)

  const handleComplete = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!task.completed) {
      onUpdate({ id: task.id, completed: true })
      setJustCompleted(true)
      setTimeout(() => setJustCompleted(false), 800)
    }
  }

  return (
    <div
      className={`p-3 rounded-lg bg-gray-800/50 flex items-start cursor-pointer transition-colors hover:bg-gray-700/50 ${expanded && "bg-pink-50/5"}`}
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
                  <Icon name="task-circle" className="w-5 h-5" />
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
              className={`font-semibold text-sm transition-colors ${task.completed ? "text-gray-400 line-through" : "text-gray-100"}`}
            >
              {task.title}
            </p>
            {task.time && (
              <span className="text-xs text-blue-400 font-medium bg-blue-400/10 px-2 py-1 rounded">{task.time}</span>
            )}
          </div>
          {task.description && (
            <p className={`text-xs text-gray-400 ${expanded ? "" : "line-clamp-2"}`}>{task.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function WeeklyAgenda() {
  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

  // Sample tasks data
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "1",
      title: "Reunión de equipo",
      description: "Revisar el progreso del proyecto y planificar las próximas tareas",
      completed: false,
      day: "Lunes",
      time: "09:00",
    },
    {
      id: "2",
      title: "Completar diseño UI",
      description: "Finalizar los mockups para la nueva funcionalidad",
      completed: true,
      day: "Lunes",
      time: "14:30",
    },
    {
      id: "3",
      title: "Revisar emails",
      description: "Responder correos pendientes",
      completed: false,
      day: "Lunes",
    },
    {
      id: "4",
      title: "Llamada con cliente",
      description: "Presentar el avance del proyecto y recopilar feedback",
      completed: false,
      day: "Martes",
      time: "10:00",
    },
    {
      id: "5",
      title: "Revisar código",
      description: "Code review de las nuevas funcionalidades implementadas",
      completed: false,
      day: "Martes",
      time: "16:00",
    },
    {
      id: "6",
      title: "Planificar sprint",
      description: "Definir tareas para la próxima iteración",
      completed: false,
      day: "Martes",
    },
    {
      id: "7",
      title: "Documentación API",
      description: "Actualizar la documentación de los nuevos endpoints",
      completed: false,
      day: "Miércoles",
      time: "11:00",
    },
    {
      id: "8",
      title: "Testing QA",
      description: "Ejecutar pruebas de calidad en el entorno de staging",
      completed: false,
      day: "Jueves",
      time: "13:00",
    },
    {
      id: "9",
      title: "Deploy producción",
      description: "Desplegar la nueva versión al entorno de producción",
      completed: false,
      day: "Viernes",
      time: "15:00",
    },
    {
      id: "10",
      title: "Retrospectiva",
      description: "Analizar qué funcionó bien y qué mejorar",
      completed: false,
      day: "Viernes",
      time: "17:00",
    },
  ])

  const handleTaskUpdate = (updatedTask: Partial<ITask>) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === updatedTask.id ? { ...task, ...updatedTask } : task)))
  }

  const getTasksForDay = (day: string) => {
    return tasks.filter((task) => task.day === day)
  }

  const getCompletedTasksCount = (day: string) => {
    const dayTasks = getTasksForDay(day)
    return dayTasks.filter((task) => task.completed).length
  }

  const getCurrentDate = () => {
    const today = new Date()
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1))
    return startOfWeek
  }

  const getDateForDay = (dayIndex: number) => {
    const startOfWeek = getCurrentDate()
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + dayIndex)
    return date.getDate()
  }

  const getSortedTasksForDay = (day: string) => {
    const dayTasks = tasks.filter((task) => task.day === day)

    // Separar tareas con hora y sin hora
    const tasksWithTime = dayTasks.filter((task) => task.time)
    const tasksWithoutTime = dayTasks.filter((task) => !task.time)

    // Ordenar tareas con hora por tiempo
    tasksWithTime.sort((a, b) => {
      if (!a.time || !b.time) return 0
      return a.time.localeCompare(b.time)
    })

    // Retornar tareas con hora primero, luego sin hora
    return [...tasksWithTime, ...tasksWithoutTime]
  }

  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 p-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Agenda Semanal</h1>
        <p className="text-gray-400">Organiza tus tareas por día de la semana</p>
      </div>

      {/* Columnas de días con scroll horizontal */}
      <div className="flex-1 overflow-x-auto">
        <div className="flex h-full min-w-max">
          {daysOfWeek.map((day, index) => {
            const dayTasks = getSortedTasksForDay(day)
            const completedCount = getCompletedTasksCount(day)
            const totalTasks = dayTasks.length
            const isToday = index === new Date().getDay() - 1

            return (
              <div
                key={day}
                className={`flex-shrink-0 w-80 h-full border-r border-gray-700 flex flex-col ${
                  isToday ? "bg-blue-500/5" : ""
                }`}
              >
                {/* Header del día */}
                <div className={`p-4 border-b border-gray-700 ${isToday ? "border-blue-500" : ""}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className={`text-lg font-semibold ${isToday ? "text-blue-400" : "text-gray-100"}`}>{day}</h3>
                      <p className="text-sm text-gray-400">{getDateForDay(index)}</p>
                    </div>
                    {totalTasks > 0 && (
                      <div className="text-right">
                        <div className="text-xs text-gray-400">
                          {completedCount}/{totalTasks}
                        </div>
                        <div className="w-8 h-1 bg-gray-600 rounded-full mt-1">
                          <div
                            className="h-full bg-green-500 rounded-full transition-all duration-300"
                            style={{ width: `${(completedCount / totalTasks) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Lista de tareas con scroll */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {dayTasks.length > 0 ? (
                    dayTasks.map((task) => <TaskItem key={task.id} task={task} onUpdate={handleTaskUpdate} />)
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p className="text-sm">No hay tareas programadas</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer con estadísticas */}
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
    </div>
  )
}
