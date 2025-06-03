import { Label } from '../ui/label';
import { Form } from 'radix-ui';
import * as React from 'react';

interface TaskAllDayFieldProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaskAllDayField: React.FC<TaskAllDayFieldProps> = ({ checked, onChange }) => (
  <Form.Field name="allDay">
    <div className="flex items-center gap-2">
      <Form.Control
        asChild
        onChange={onChange}
        checked={checked}
      >
        <input
          id="allDay"
          name="allDay"
          type="checkbox"
          className="accent-primary-dark w-4 h-4 rounded focus:ring focus:ring-primary-light"
        />
      </Form.Control>
      <Label htmlFor="allDay" className="text-gray-200 select-none cursor-pointer">
        Evento de todo el día
      </Label>
    </div>
  </Form.Field>
); 