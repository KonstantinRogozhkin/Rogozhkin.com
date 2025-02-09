import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export const Section: FC<SectionProps> = ({
  children,
  className,
  id,
  containerClassName,
  fullWidth = false,
}) => {
  return (
    <section
      id={id}
      className={clsx('py-16 md:py-24', className)}
    >
      <div
        className={clsx(
          'mx-auto px-4',
          {
            'container': !fullWidth,
          },
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}; 