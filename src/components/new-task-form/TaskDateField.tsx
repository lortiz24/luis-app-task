import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Form } from 'radix-ui';
import * as React from 'react';

interface TaskDateFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaskDateField: React.FC<TaskDateFieldProps> = ({ value, onChange }) => (
  <Form.Field name="date">
    <div className="space-y-1">
      <Label htmlFor="date" className="text-gray-200">
        Fecha programada
      </Label>
      <Form.Control asChild onChange={onChange} value={value}>
        <Input id="date" name="date" type="date" required />
      </Form.Control>
    </div>
  </Form.Field>
); 