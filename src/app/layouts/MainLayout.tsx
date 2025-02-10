import { FC, ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getThemeStyles } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';
import { Footer } from '@/widgets/Footer';
import { DesktopHeader } from '@/widgets/Header/ui/DesktopHeader';
import { BaseLayout } from '@/shared/ui/layouts';

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const themeStyles = getThemeStyles(isDark);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BaseLayout
      className={themeStyles.layout}
      header={<DesktopHeader isScrolled={isScrolled} />}
      footer={<Footer />}
    >
      {/* Background Effects */}
      <div className={themeStyles.background} />
      <div className={themeStyles.overlay} />

      {isDark ? (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-cyan-500/[0.02] blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/[0.02] blur-[120px] animate-pulse delay-1000" />
        </div>
      ) : (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-soft-light" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-100/20 blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-indigo-100/20 blur-[100px] animate-pulse delay-700" />
        </div>
      )}

      {/* Main content */}
      {children || <Outlet />}
    </BaseLayout>
  );
}; 