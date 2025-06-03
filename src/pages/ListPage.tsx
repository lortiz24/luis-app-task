import { useState } from 'react';
import { CardOfTask } from '../components/cart-of-task/CardOfTask';
import type { ITask } from '../interfaces/task.interface';
import { Button } from '../components/ui/Button';

const initialListsData = [
  {
    list: { id: 'lista1', title: 'Lista 1' },
    tasks: [
      {
        id: '1',
        title: 'Comprar víveres',
        description: 'Comprar leche, pan y huevos en el centro comercial que queda a las afueras de la ciudad',
        user_id: 'usuario1',
        list_id: 'lista1',
        completed: false,
        scheduled_date: '2024-06-10',
        scheduled_time: '10:00:00',
        create_at: '2024-06-01T09:00:00Z',
        update_at: '2024-06-01T09:00:00Z',
      },
      {
        id: '2',
        title: 'Estudiar React',
        description: 'Repasar hooks y componentes funcionales',
        user_id: 'usuario1',
        list_id: 'lista1',
        completed: false,
        scheduled_date: '2024-06-11',
        scheduled_time: '15:00:00',
        create_at: '2024-06-01T10:00:00Z',
        update_at: '2024-06-01T10:00:00Z',
      },
      {
        id: '3',
        title: 'Hacer ejercicio',
        user_id: 'usuario1',
        list_id: 'lista1',
        completed: false,
        scheduled_date: '2024-06-12',
        scheduled_time: '07:30:00',
        create_at: '2024-06-01T11:00:00Z',
        update_at: '2024-06-01T11:00:00Z',
      },
    ],
  },
  // Puedes agregar más listas aquí
  {
    list: { id: 'lista2', title: 'Lista 2' },
    tasks: [
      {
        id: '4',
        title: 'Planear viaje',
        description: 'Buscar vuelos y hoteles',
        user_id: 'usuario1',
        list_id: 'lista2',
        completed: false,
        create_at: '2024-06-05T12:00:00Z',
        update_at: '2024-06-05T12:00:00Z',
      },
    ],
  },
];

export const ListPage = () => {
  // Estado principal que contiene todas las listas y sus tareas
  const [listsData, setListsData] = useState(initialListsData);

  // Función central para actualizar una tarea
  const handleTaskUpdate = (updatedTask: Partial<ITask>) => {
    console.log('Actualizando tarea:', updatedTask);
    // Aquí iría la lógica para llamar a tu API para persistir el cambio
    // Por ejemplo: api.updateTask(updatedTask);

    // Lógica para actualizar el estado local (optimista)
    setListsData((currentListsData) => {
      return currentListsData.map((listData) => {
        // Busca la tarea en las listas
        const taskIndex = listData.tasks.findIndex((task) => task.id === updatedTask.id);

        if (taskIndex > -1) {
          // Si la tarea se encuentra en esta lista, crea una copia actualizada
          const newTasks = [...listData.tasks];
          newTasks[taskIndex] = { ...newTasks[taskIndex], ...updatedTask };
          return { ...listData, tasks: newTasks };
        }
        // Si la tarea no está en esta lista, devuelve la lista sin cambios
        return listData;
      });
    });
  };

  // Podrías agregar aquí handleListEdit si es necesario

  return (
    <div className="px-9 flex gap-6">
      <div className="">
        <Button variant="solid">Hola</Button>
        <Button variant="secondary">Hola</Button>
        <Button variant="danger">Hola</Button>
        <Button variant="text">Hola</Button>
      </div>
      {listsData.map((listData) => (
        <CardOfTask
          key={listData.list.id} // Clave importante para la lista
          list={listData.list}
          tasks={listData.tasks}
          onTaskUpdate={handleTaskUpdate} // Pasa la función de actualización central
        />
      ))}
    </div>
  );
};
