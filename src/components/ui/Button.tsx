import * as React from 'react';
import clsx from 'clsx';
import { Loader } from './Loader';

// Tipos para variantes y tamaños
export type ButtonVariant = 'solid' | 'secondary' | 'danger' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-primary-dark/80 text-white hover:bg-primary-700/80 focus:ring-primary-normal',
  secondary: 'bg-secondary-dark/80 text-white hover:bg-secondary-700/80 focus:ring-secondary-normal',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  text: 'bg-transparent text-primary hover:underline shadow-none p-0 focus:ring-primary-normal',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  asChild = false,
  className = '',
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `inline-flex items-center justify-center rounded-md font-medium
         transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer relative overflow-hidden`,
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        loading && 'relative text-transparent pointer-events-none',
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {/* {loading && <span className="absolute inset-0 flex items-center justify-center text-white">Cargando...</span>}
      {children} */}
      <span className={clsx({ invisible: loading }, 'flex items-center justify-center')}>{children}</span>
      {loading && <span className="absolute inset-0 flex items-center justify-center text-white"><Loader/></span>}
    </button>
  );
};
