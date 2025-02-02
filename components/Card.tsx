import * as React from 'react';
import { cx, isDOMTypeElement } from '@/lib/utils';
import Link from '@/components/Link';
import RightArrow from '@/components/RightArrow';

type CardProps =
  | {
      variant?: keyof typeof variants;
      link?: string;
      eyebrow?: never;
      title?: never;
      description?: never;
      children: React.ReactNode;
    }
  | {
      variant?: keyof typeof variants;
      link?: string;
      eyebrow?: string;
      title: string;
      description: string;
      children?: never;
    };

const variants = {
  orange: 'text-orange-600',
  emerald: 'text-emerald-600',
  violet: 'text-violet-600',
  blue: 'text-blue-600',
  amber: 'text-amber-600',
  red: 'text-red-600',
};

function Card({
  variant = 'orange',
  link,
  eyebrow,
  title,
  description,
  children,
}: CardProps) {
  return (
    <div
      className={cx(
        'relative group flex flex-col p-4 sm:p-8 rounded-md overflow-hidden border borderColor',
        'bg-gray-50',
        'dark:bg-gray-900',
      )}
    >
      {children ? (
        React.Children.map(children, (child) => {
          if (isDOMTypeElement(child)) {
            return child;
          } else {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                link,
                variant,
              });
            } else {
              return child;
            }
          }
        })
      ) : (
        <>
          <div>
            {eyebrow && (
              <Card.Eyebrow variant={variant}>{eyebrow}</Card.Eyebrow>
            )}
            <Card.Title link={link} children={title} />
            <Card.Description>{description}</Card.Description>
          </div>
        </>
      )}
      {link && (
        <div className="mt-auto pt-4 sm:pt-8 flex justify-end items-center transition-transform group-hover:translate-x-[2px]">
          <RightArrow position="after" fill={variants[variant]} />
        </div>
      )}
    </div>
  );
}

function CardEyebrow({ variant, children }) {
  return (
    <p
      className={cx(
        'mt-0 mb-2 text-sm font-bold uppercase tracking-wider',
        variants[variant],
      )}
    >
      {children}
    </p>
  );
}

function CardTitle({
  link,
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) {
  return (
    <h3 className="m-0">
      {link ? (
        <Link
          className="underline hover:no-underline after:absolute after:inset-0 after:z-10"
          href={link}
        >
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </h3>
  );
}

function CardDescription({ children }) {
  return <p className="mt-4 mb-0 text-base opacity-75">{children}</p>;
}

Card.Eyebrow = CardEyebrow;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;
