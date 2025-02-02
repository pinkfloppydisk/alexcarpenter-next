import { cx } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm';
}

export default function Button({ size, children, ...props }: ButtonProps) {
  return (
    <button
      className={cx(
        'border px-4 py-1 rounded-md',
        'bg-gray-50',
        'dark:bg-gray-800',
        'borderColor',
        {
          'text-sm': size === 'sm',
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}
