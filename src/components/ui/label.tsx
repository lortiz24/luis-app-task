import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export const Label: React.FC<LabelProps> = ({ className = '', ...props }) => (
  <label className={`block text-sm font-medium ${className}`} {...props} />
); 