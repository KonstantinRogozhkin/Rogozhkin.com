import { FC, ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

export interface BaseLayoutProps {
  className?: string;
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  /**
   * Дополнительные классы для main
   */
  mainClassName?: string;
}

export const BaseLayout: FC<BaseLayoutProps> = ({
  className,
  children,
  header,
  footer,
  mainClassName,
}) => {
  return (
    <div className={cn('min-h-screen flex flex-col', className)}>
      {header && (
        <header className="flex-none">
          {header}
        </header>
      )}
      
      <main className={cn('flex-1', mainClassName)}>
        {children}
      </main>

      {footer && (
        <footer className="flex-none">
          {footer}
        </footer>
      )}
    </div>
  );
}; 