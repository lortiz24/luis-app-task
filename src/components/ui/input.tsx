import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => (
  <input
    className={`block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 shadow-sm focus:border-primary-normal focus:ring-primary-normal sm:text-sm placeholder-gray-400 ${className}`}
    {...props}
  />
); 