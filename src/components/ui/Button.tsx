import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'flex items-center justify-center cursor-pointer rounded-[33px] font-semibold tracking-[0.196px] transition-all duration-200 hover:opacity-90';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white',
    secondary: 'bg-white text-gray-800 border border-gray-300'
  };
  
  const sizeClasses = {
    sm: 'w-[220px] h-10 text-sm max-sm:w-[200px] max-sm:h-9',
    md: 'w-[270px] h-[47px] text-base max-sm:w-[220px] max-sm:h-10',
    lg: 'w-[353px] h-[69px] text-3xl max-md:w-[280px] max-md:h-[60px] max-sm:w-[250px] max-sm:h-[50px]'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
