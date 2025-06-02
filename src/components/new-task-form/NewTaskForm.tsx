import * as React from 'react';
import { Form } from 'radix-ui';
import * as Select from '@radix-ui/react-select';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import type { IList } from '../../interfaces/list.interface';

interface NewTaskFormProps {
  lists: IList[];
}

export const NewTaskForm: React.FC<NewTaskFormProps> = ({ lists }) => {
  const [allDay, setAllDay] = React.useState(false);

  return (
    <Form.Root className="space-y-4">
      {/* Título */}
      <Form.Field name="title">
        <div className="space-y-1">
          <Label htmlFor="title" className="text-gray-200">
            Título de la tarea
          </Label>
          <Form.Control asChild>
            <Input id="title" name="title" type="text" placeholder="Ej: Comprar pan" required />
          </Form.Control>
        </div>
      </Form.Field>

      {/* Descripción */}
      <Form.Field name="description">
        <div className="space-y-1">
          <Label htmlFor="description" className="text-gray-200">
            Descripción
          </Label>
          <Form.Control asChild>
            <Input id="description" name="description" type="text" placeholder="Opcional" />
          </Form.Control>
        </div>
      </Form.Field>

      {/* Fecha */}
      <Form.Field name="date">
        <div className="space-y-1">
          <Label htmlFor="date" className="text-gray-200">
            Fecha programada
          </Label>
          <Form.Control asChild>
            <Input id="date" name="date" type="date" required />
          </Form.Control>
        </div>
      </Form.Field>

      {/* Todo el día */}
      <Form.Field name="allDay">
        <div className="flex items-center gap-2">
          <Form.Control asChild>
            <input
              id="allDay"
              name="allDay"
              type="checkbox"
              checked={allDay}
              onChange={(e) => setAllDay(e.target.checked)}
              className="accent-primary-600 w-4 h-4 rounded focus:ring focus:ring-primary-400"
            />
          </Form.Control>
          <Label htmlFor="allDay" className="text-gray-200 select-none cursor-pointer">
            Evento de todo el día
          </Label>
        </div>
      </Form.Field>

      {/* Select de listas */}
      <Form.Field name="listId">
        <div className="space-y-1">
          <Label htmlFor="listId" className="text-gray-200">
            Lista
          </Label>
          <Form.Control asChild>
            <Select.Root name="listId" required>
              <Select.Trigger
                className="w-full flex items-center justify-between rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm placeholder-gray-400"
                id="listId"
              >
                <Select.Value placeholder="Selecciona una lista" />
                <Select.Icon>
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="z-50 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                  <Select.ScrollUpButton className="flex items-center justify-center h-6 text-gray-400">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="p-1">
                    {lists.map((list) => (
                      <Select.Item
                        key={list.id}
                        value={list.id}
                        className="cursor-pointer select-none rounded px-3 py-2 text-gray-100 hover:bg-primary-600/20 focus:bg-primary-600/30 data-[state=checked]:bg-primary-600/40 flex items-center gap-2"
                      >
                        <Select.ItemText>{list.title}</Select.ItemText>
                        <Select.ItemIndicator className="ml-auto text-primary-400">
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                  <Select.ScrollDownButton className="flex items-center justify-center h-6 text-gray-400">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </Form.Control>
        </div>
      </Form.Field>

      {/* Botón de submit */}
      <button
        type="submit"
        className="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
      >
        Crear tarea
      </button>
    </Form.Root>
  );
};
