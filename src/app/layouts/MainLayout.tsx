import { FC, ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/features/theme/ThemeToggle';
import { MobileMenu } from '@/features/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';
import { Footer } from '@/widgets/Footer';

interface MainLayoutProps {
  children?: ReactNode;
}

const socialLinks = [
  { href: 'https://github.com/KonstantinRogozhkin', label: 'GitHub', icon: 'github' },
  { href: 'https://linkedin.com/in/KonstantinRogozhkin', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://t.me/konstik', label: 'Telegram', icon: 'telegram' }
];

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Главная' },
    { href: '#services', label: 'Услуги' },
    { href: '#portfolio', label: 'Портфолио' },
    { href: '#resume', label: 'Резюме' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300 relative",
      isDark 
        ? "bg-[#0B1120] text-cyan-50 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_0%_0%,rgba(34,211,238,0.1),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(192,132,252,0.15),transparent_40%)] after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.4))]"
        : "bg-[#F4F6FA] text-zinc-800 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,1),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(248,250,252,1),transparent_50%)] after:absolute after:inset-0 after:bg-[url('/grid-light.svg')] after:opacity-[0.015]"
    )}>
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

      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform",
          isScrolled 
            ? isDark 
              ? "bg-[#0B1120]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_0_15px_rgba(0,255,255,0.1)]" 
              : "bg-white/60 backdrop-blur-md shadow-sm border-b border-slate-200/50"
            : isDark
              ? "bg-[#0B1120]/50 backdrop-blur-sm border-b border-cyan-500/10"
              : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a
              href="#hero"
              className={cn(
                "text-xl font-bold relative transition-transform hover:scale-105 will-change-transform",
                isDark 
                  ? "text-cyan-400"
                  : "bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
              )}
            >
              KR
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <AnimatePresence>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative py-2 transition-all duration-300 will-change-transform hover:scale-105",
                      isDark 
                        ? "text-cyan-100 hover:text-cyan-400" 
                        : "text-zinc-600 hover:text-indigo-600"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-0.5 scale-x-0 transition-transform duration-300 will-change-transform hover:scale-x-100",
                        isDark ? "bg-cyan-400" : "bg-indigo-600"
                      )}
                    />
                  </a>
                ))}
              </AnimatePresence>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-16 relative">
        {children || <Outlet />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}; 