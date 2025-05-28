import { CardOfTask } from '../components/cart-of-task/CardOfTask';

export const ListPage = () => {
  return (
    <div className="px-9">
      <CardOfTask
        title="Lista 1"
        tasks={[
          {
            id: '1',
            title: 'Comprar víveres',
            description: 'Comprar leche, pan y huevos',
            user_id: 'usuario1',
            list_id: 'lista1',
            scheduled_date: '2024-06-10',
            scheduled_time: '10:00:00',
            create_at: '2024-06-01T09:00:00Z',
            update_at: '2024-06-01T09:00:00Z',
            completed: false,
          },
          {
            id: '2',
            title: 'Estudiar React',
            description: 'Repasar hooks y componentes funcionales',
            user_id: 'usuario1',
            list_id: 'lista1',
            scheduled_date: '2024-06-11',
            scheduled_time: '15:00:00',
            create_at: '2024-06-01T10:00:00Z',
            update_at: '2024-06-01T10:00:00Z',
            completed: false,
          },
          {
            id: '3',
            title: 'Hacer ejercicio',
            description: 'Salir a correr 30 minutos',
            user_id: 'usuario1',
            list_id: 'lista1',
            scheduled_date: '2024-06-12',
            scheduled_time: '07:30:00',
            create_at: '2024-06-01T11:00:00Z',
            update_at: '2024-06-01T11:00:00Z',
            completed: false,
          },
        ]}
      />
    </div>
  );
};
