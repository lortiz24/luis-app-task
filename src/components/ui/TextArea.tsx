import * as React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ className = '', ...props }) => (
  <textarea
    className={`block w-full rounded-md border
       border-gray-700 bg-gray-800 px-3 py-2
        text-gray-100 shadow-sm focus:border-primary-normal
         focus:ring-primary-normal sm:text-sm placeholder-gray-400 ${className}`}
    {...props}
  />
);
