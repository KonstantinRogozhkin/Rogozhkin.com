import { FC, ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/features/theme/ThemeToggle';
import { MobileMenu } from '@/features/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#experience', label: 'Опыт' },
    { href: '#portfolio', label: 'Портфолио' },
    { href: '#services', label: 'Услуги' },
    { href: '#blog', label: 'Блог' },
    { href: '#contact', label: 'Контакты' }
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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "text-xl font-bold relative",
                isDark 
                  ? "text-cyan-400 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:blur-lg after:bg-cyan-500/30 after:opacity-0 hover:after:opacity-100 after:transition-opacity"
                  : "bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
              )}
            >
              KR
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <AnimatePresence>
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "relative py-2 transition-all duration-300",
                      isDark 
                        ? "text-cyan-100 hover:text-cyan-400" 
                        : "text-zinc-600 hover:text-indigo-600"
                    )}
                    whileHover={isDark ? {
                      textShadow: "0 0 8px rgba(34,211,238,0.5)",
                      scale: 1.05
                    } : { 
                      scale: 1.05,
                      color: 'rgb(79, 70, 229)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item.label}
                    <motion.span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-0.5",
                        isDark ? "bg-cyan-400" : "bg-indigo-600"
                      )}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
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
      </motion.header>

      {/* Main content */}
      <main className="pt-16 relative">
        {children || <Outlet />}
      </main>

      {/* Footer */}
      <footer className={cn(
        "mt-auto transition-colors duration-300 relative",
        isDark 
          ? "bg-[#0B1120]/50 border-t border-cyan-500/10" 
          : "bg-white/30 border-t border-slate-200/50 backdrop-blur-sm"
      )}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "text-xl font-bold relative inline-block",
                  isDark 
                    ? "text-cyan-400 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:blur-lg after:bg-cyan-500/30 after:opacity-0 hover:after:opacity-100 after:transition-opacity"
                    : "bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
                )}
              >
                KR
              </motion.div>
              <p className={cn(
                "text-sm max-w-md",
                isDark ? "text-cyan-100/60" : "text-zinc-600"
              )}>
                Разработка интеллектуальных систем и решений в области AI. 
                Автоматизация бизнес-процессов с использованием машинного обучения.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className={cn(
                "font-semibold",
                isDark ? "text-cyan-400" : "text-indigo-600"
              )}>
                Навигация
              </h3>
              <nav className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className={cn(
                      "text-sm transition-colors",
                      isDark 
                        ? "text-cyan-100/60 hover:text-cyan-400" 
                        : "text-zinc-600 hover:text-indigo-600"
                    )}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Contact and Social */}
            <div className="space-y-4">
              <h3 className={cn(
                "font-semibold",
                isDark ? "text-cyan-400" : "text-indigo-600"
              )}>
                Контакты
              </h3>
              <div className="space-y-2">
                <a 
                  href="mailto:k.rogozhkin@gmail.com"
                  className={cn(
                    "text-sm block transition-colors",
                    isDark 
                      ? "text-cyan-100/60 hover:text-cyan-400" 
                      : "text-zinc-600 hover:text-indigo-600"
                  )}
                >
                  k.rogozhkin@gmail.com
                </a>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className={cn(
                        "text-sm transition-colors",
                        isDark 
                          ? "text-cyan-100/60 hover:text-cyan-400" 
                          : "text-zinc-600 hover:text-indigo-600"
                      )}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className={cn(
            "text-center text-sm mt-8 pt-8",
            isDark 
              ? "text-cyan-400/60 border-t border-cyan-500/10" 
              : "text-zinc-500 border-t border-slate-200/50"
          )}>
            © {new Date().getFullYear()} Konstantin Rogozhkin. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}; 