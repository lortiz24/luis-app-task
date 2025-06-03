import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Form } from 'radix-ui';
import * as React from 'react';

interface TaskTitleFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaskTitleField: React.FC<TaskTitleFieldProps> = React.memo(({ value, onChange }) => (
  <Form.Field name="title">
    <div className="space-y-1">
      <Label htmlFor="title" className="text-gray-200">
        Título de la tarea
      </Label>

      <Form.Control asChild onChange={onChange} value={value}>
        <Input id="title" name="title" type="text" placeholder="Ej: Comprar pan" required />
      </Form.Control>
      <Form.Message match="valueMissing" className="text-red-500 text-xs mt-1">
        El título es obligatorio
      </Form.Message>
      <Form.Message
        match={(value) => {
          return value.length > 75;
        }}
        className="text-red-500 text-xs mt-1"
      >
        El título no puede exceder los 75 caracteres
      </Form.Message>
    </div>
  </Form.Field>
));
