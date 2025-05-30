import React from 'react';

// Tipos para variantes y tamaños
export type ButtonVariant = 'solid' | 'secondary' | 'danger' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

// Clases base por variante
const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-primary-600/80 text-white hover:bg-primary-700/80',
  secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  text: 'bg-transparent text-primary hover:underline shadow-none p-0',
};

// Clases base por tamaño
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  leftIcon,
  children,
  className = '',
  loading = false,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4 mr-2 text-current" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      )}
      {!loading && leftIcon && <span className="flex items-center mr-2">{leftIcon}</span>}
      {children}
    </button>
  );
};
