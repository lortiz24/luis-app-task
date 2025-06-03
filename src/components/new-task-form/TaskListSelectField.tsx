import { Label } from '../ui/label';
import { Form } from 'radix-ui';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import type { IList } from '../../interfaces/list.interface';

interface TaskListSelectFieldProps {
  value: string;
  onChange: (value: string) => void;
  lists: IList[];
}

export const TaskListSelectField: React.FC<TaskListSelectFieldProps> = ({ value, onChange, lists }) => (
  <Form.Field name="listId">
    <div className="space-y-1">
      <Label htmlFor="listId" className="text-gray-200">
        Lista
      </Label>
      <Form.Control asChild>
        <Select.Root value={value} onValueChange={onChange} name="listId" required>
          <Select.Trigger
            className="w-full flex items-center justify-between rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 shadow-sm focus:border-primary-normal focus:ring-2 focus:ring-primary-normal sm:text-sm placeholder-gray-400"
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
                    className="cursor-pointer select-none rounded px-3 py-2 text-gray-100 hover:bg-primary-dark/20 focus:bg-primary-dark/30 data-[state=checked]:bg-primary-dark/40 flex items-center gap-2"
                  >
                    <Select.ItemText>{list.title}</Select.ItemText>
                    <Select.ItemIndicator className="ml-auto text-primary-light">
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
); 