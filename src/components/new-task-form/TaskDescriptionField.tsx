import { Label } from '../ui/label';
import { Form } from 'radix-ui';
import * as React from 'react';
import { TextArea } from '../ui/TextArea';

interface TaskDescriptionFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaskDescriptionField: React.FC<TaskDescriptionFieldProps> = ({ value, onChange }) => (
  <Form.Field name="description">
    <div className="space-y-1">
      <Label htmlFor="description" className="text-gray-200">
        Descripción
      </Label>
      <Form.Control asChild onChange={onChange} value={value}>
        <TextArea id="description" name="description" placeholder="Opcional" />
      </Form.Control>
    </div>
  </Form.Field>
);
