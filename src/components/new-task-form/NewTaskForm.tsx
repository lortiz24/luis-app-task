import * as React from 'react';
import { Form } from 'radix-ui';
import { TaskTitleField } from './TaskTitleField';
import { TaskDescriptionField } from './TaskDescriptionField';
import { TaskDateField } from './TaskDateField';
import { TaskAllDayField } from './TaskAllDayField';
import { TaskListSelectField } from './TaskListSelectField';
import type { IList } from '../../interfaces/list.interface';
import { Button } from '../ui/Button';

interface NewTaskFormProps {
  lists: IList[];
}

export const NewTaskForm: React.FC<NewTaskFormProps> = ({ lists }) => {
  const [form, setForm] = React.useState({
    title: '',
    description: '',
    date: '',
    allDay: false,
    listId: '',
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onListChange = (value: string) => {
    setForm((prev) => ({ ...prev, listId: value }));
  };

  return (
    <Form.Root className="space-y-4">
      <TaskTitleField value={form.title} onChange={onInputChange} />
      <TaskDescriptionField value={form.description} onChange={onInputChange} />
      <TaskDateField value={form.date} onChange={onInputChange} />
      <TaskAllDayField checked={form.allDay} onChange={onInputChange} />
      <TaskListSelectField value={form.listId} onChange={onListChange} lists={lists} />
      <Button variant="solid" type="submit" className='w-full'>
        Crear tarea
      </Button>
    </Form.Root>
  );
};
