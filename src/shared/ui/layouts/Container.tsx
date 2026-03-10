import { FC, ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

export interface ContainerProps {
  className?: string;
  children: ReactNode;
  /**
   * HTML tag для контейнера
   * @default 'div'
   */
  as?: 'div' | 'main' | 'article' | 'section';
}

export const Container: FC<ContainerProps> = ({
  className,
  children,
  as: Component = 'div',
}) => {
  return (
    <Component className={cn('container mx-auto px-4', className)}>
      {children}
    </Component>
  );
}; 