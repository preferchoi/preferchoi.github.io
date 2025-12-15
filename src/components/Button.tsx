import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  to?: string;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm dark:text-slate-950',
  ghost: 'border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
};

const Button = ({ children, variant = 'primary', to, className = '', ...rest }: ButtonProps) => {
  const classes = `${baseClasses} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
