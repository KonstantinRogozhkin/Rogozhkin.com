import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/features/theme/ThemeToggle';
import { MobileMenu } from '@/features/navigation';

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-default text-default-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-card/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="text-xl font-bold">KR</div>
          
          {/* Navigation - will be replaced with component */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#experience" className="hover:text-primary transition-colors">Опыт</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-16">
        {children || <Outlet />}
      </main>

      {/* Footer */}
      <footer className="bg-card mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-default-foreground/60">
            © {new Date().getFullYear()} Konstantin Rogozhkin. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}; 