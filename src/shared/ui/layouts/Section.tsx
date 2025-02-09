import { FC, ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
  /**
   * Использовать container из tailwind.config.js
   * @default true
   */
  useContainer?: boolean;
  /**
   * HTML tag для секции
   * @default 'section'
   */
  as?: 'section' | 'article' | 'aside' | 'div';
}

export const Section: FC<SectionProps> = ({
  id,
  className,
  children,
  containerClassName,
  useContainer = true,
  as: Component = 'section',
}) => {
  return (
    <Component
      id={id}
      className={cn(
        'relative w-full py-16 md:py-24',
        className
      )}
    >
      {useContainer ? (
        <div className={cn('container mx-auto px-4', containerClassName)}>
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  );
}; 