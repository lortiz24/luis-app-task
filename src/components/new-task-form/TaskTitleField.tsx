import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Form } from 'radix-ui';
import * as React from 'react';

interface TaskTitleFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaskTitleField: React.FC<TaskTitleFieldProps> = ({ value, onChange }) => (
  <Form.Field name="title">
    <div className="space-y-1">
      <Label htmlFor="title" className="text-gray-200">
        Título de la tarea
      </Label>
      <Form.Control asChild onChange={onChange} value={value}>
        <Input id="title" name="title" type="text" placeholder="Ej: Comprar pan" required />
      </Form.Control>
    </div>
  </Form.Field>
); 