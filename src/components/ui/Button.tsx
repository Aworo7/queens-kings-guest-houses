import { forwardRef } from 'react';
import { cn } from '@/src/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-emerald-900 text-white hover:bg-emerald-800',
      secondary: 'bg-amber-600 text-white hover:bg-amber-700',
      outline: 'border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50',
    };
    return (
      <button
        ref={ref}
        className={cn('px-6 py-3 rounded-full font-semibold transition duration-300', variants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
