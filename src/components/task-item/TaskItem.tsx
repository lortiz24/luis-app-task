import { useState, useEffect } from 'react';
import type { ITask } from '../../interfaces/task.interface';
import Icon from '../icons/Icon';
import { CheckIcon, CheckCircleIcon } from '@heroicons/react/16/solid';

interface Props {
  task: ITask;
  onUpdate: (newTask: Partial<ITask>) => void;
}
const iconSize = 20;

export const TaskItem = ({ task, onUpdate }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  // Detecta cuando la tarea pasa a completada para animar (usa el prop task directamente)
  useEffect(() => {
    // Solo animar si la tarea está marcada como completada y NO lo estaba antes de este render
    // (requiere comparar el estado anterior si se pasa como prop,
    // pero para simplicidad aquí asumimos que el prop ya trae el estado final)
    if (task.completed) {
      setJustCompleted(true);
      const timeout = setTimeout(() => setJustCompleted(false), 800); // Duración de la animación
      return () => clearTimeout(timeout);
    }
  }, [task.completed]); // Depende solo del estado 'completed' del prop

  const handleComplete = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el clic expanda/colapse la descripción
    // Llama a onUpdate solo si NO está completada para evitar clics repetidos
    if (!task.completed) {
      // Llama a la función del padre para actualizar el estado global/backend
      onUpdate({ id: task.id, completed: true });
      // Nota: En una actualización optimista pura, podrías actualizar el estado LOCAL aquí temporalmente
      // antes de llamar a onUpdate, pero como onUpdate DEBERÍA actualizar el estado global
      // que luego se propaga de vuelta como prop 'task', a menudo no necesitas estado local para 'completed'.
      // La animación 'justCompleted' sí justifica su estado local.
    }
  };

  return (
    <div
      // El clic en el contenedor expande/colapsa la descripción
      className={`py-2 rounded-lg bg-bg flex items-start cursor-pointer ${expanded && 'bg-pink-50/5'}`} // Agregamos cursor-pointer para indicar que es clickeable
      onClick={() => setExpanded((e) => !e)}
      tabIndex={0}
      role="button"
    >
      <div className="flex flex-nowrap w-full box-border transition-[padding-left] duration-250">
        <div className="relative mx-3 flex-shrink-0 ">
          <button
            className="cursor-pointer group relative w-7 h-7 flex items-center justify-center transition-all duration-200"
            onClick={handleComplete}
            tabIndex={-1} // No tabulable para evitar doble foco con el div padre
          >
            {!task.completed ? (
              <>
                <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
                  <Icon name="task-circle" className={`w-${iconSize / 4} h-${iconSize / 4}`} />
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <CheckIcon className={`w-${iconSize / 4} h-${iconSize / 4}`} />
                </span>
              </>
            ) : (
              <>
                <span
                  className={`absolute inset-0 flex items-center justify-center text-primary-50 ${
                    justCompleted ? 'animate-rubber-band' : ''
                  }`}
                >
                  <CheckCircleIcon className={`w-${iconSize / 4} h-${iconSize / 4}`} />
                </span>
              </>
            )}
          </button>
        </div>
        <div className="flex flex-col gap-1 flex-1 pr-4">
          <p className="font-semibold text-sm  text-text">{task.title}</p> {/* Usamos tu variable text */}
          {task.description && ( // Solo muestra la descripción si existe
            <p className={`text-xs text-gray ${expanded ? '' : 'line-clamp-2'}`}>{task.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
