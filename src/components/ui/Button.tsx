import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

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
  children: React.ReactNode;
}

// Clases base por variante
const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-primary-600/80 text-white hover:bg-primary-700/80 focus:ring-primary-500',
  secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  text: 'bg-transparent text-primary hover:underline shadow-none p-0 focus:ring-primary-500',
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
  rightIcon,
  loading = false,
  asChild = false,
  className = '',
  disabled,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';
  const contentRef = React.useRef<HTMLSpanElement>(null);
  const [contentWidth, setContentWidth] = React.useState<number | undefined>(undefined);

  React.useLayoutEffect(() => {
    if (contentRef.current && loading) {
      setContentWidth(contentRef.current.offsetWidth);
    }
    if (!loading) {
      setContentWidth(undefined);
    }
  }, [loading, children]);

  return (
    <Comp
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer relative overflow-hidden ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${className}`}
      style={contentWidth ? { width: contentWidth } : undefined}
      disabled={disabled || loading}
      {...props}
    >
      {/* Loader centrado */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center z-10">
          <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
        </span>
      )}
      {/* Contenido con animación de salida y reserva de espacio */}
      <span
        ref={contentRef}
        className={`flex items-center transition-all duration-300 ${
          loading
            ? 'opacity-0 translate-y-4 pointer-events-none select-none'
            : 'opacity-100 translate-y-0'
        } ${loading ? 'absolute inset-0 w-full justify-center' : ''}`}
        aria-hidden={loading ? 'true' : undefined}
      >
        {!loading && leftIcon && <span className="flex items-center mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="flex items-center ml-2">{rightIcon}</span>}
      </span>
      {/* Span invisible para reservar el ancho cuando loading (solo si hay loading) */}
      {loading && (
        <span className="invisible absolute">
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </span>
      )}
    </Comp>
  );
};
