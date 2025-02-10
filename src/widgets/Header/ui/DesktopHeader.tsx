import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeToggle } from '@/features/theme/ThemeToggle';
import { MobileMenu } from '@/features/navigation';
import { LocaleSwitcher } from '@/features/locale-switcher';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';
import { Container } from '@/shared/ui/layouts';
import { RiHome4Line, RiCustomerService2Line, RiBriefcase2Line, RiProfileLine, RiMailLine } from 'react-icons/ri';

interface DesktopHeaderProps {
  isScrolled: boolean;
}

export const DesktopHeader: FC<DesktopHeaderProps> = ({ isScrolled }) => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === 'dark';

  const navItems = [
    { href: '#hero', label: 'menu.home', icon: RiHome4Line },
    { href: '#services', label: 'menu.services', icon: RiCustomerService2Line },
    { href: '#portfolio', label: 'menu.portfolio', icon: RiBriefcase2Line },
    { href: '#resume', label: 'menu.resume', icon: RiProfileLine },
    { href: '#contact', label: 'menu.contact', icon: RiMailLine },
  ];

  return (
    <header
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
      <Container className="h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="#hero"
            className={cn(
              "text-xl font-bold relative transition-transform duration-200 hover:scale-105 font-cyber",
              isDark 
                ? "text-cyan-400"
                : "bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
            )}
          >
            {t('brand')}
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <AnimatePresence>
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 transition-all duration-200 hover:scale-[1.02] flex items-center gap-2",
                    isDark 
                      ? "text-cyan-100 hover:text-cyan-400" 
                      : "text-zinc-600 hover:text-indigo-600"
                  )}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <item.icon className={cn(
                    "w-4 h-4 transition-transform duration-300 hover:rotate-12",
                    isDark 
                      ? "text-cyan-400/70" 
                      : "text-indigo-600/70"
                  )} />
                  <span className="font-cyber tracking-wide text-sm">
                    {t(item.label)}
                  </span>
                </motion.a>
              ))}
            </AnimatePresence>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LocaleSwitcher />
            </div>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}; 