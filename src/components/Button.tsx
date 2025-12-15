import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  to?: string;
  as?: React.ElementType;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm dark:bg-primary-dark dark:text-primary-foreground dark:hover:bg-primary-dark/90',
  ghost:
    'border border-border text-foreground hover:bg-primary/10 hover:text-primary dark:border-border dark:text-foreground-dark dark:hover:bg-primary-dark/20 dark:hover:text-primary'
};

const Button = ({ children, variant = 'primary', to, className = '', as, ...rest }: ButtonProps) => {
  const classes = `${baseClasses} ${variantStyles[variant]} ${className}`;

  const Component = (as ?? (to ? Link : 'button')) as React.ElementType;
  const componentProps = { ...rest, className: classes } as Record<string, unknown>;

  if (to) componentProps.to = to;

  return <Component {...componentProps}>{children}</Component>;
};

export default Button;
