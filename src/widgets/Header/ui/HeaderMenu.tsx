import { FC } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';
import { LocaleSwitcher } from '@/features/locale-switcher';

interface MenuItem {
  to: string;
  labelKey: string;
}

const menuItems: MenuItem[] = [
  { to: '/', labelKey: 'menu.home' },
  { to: '/portfolio', labelKey: 'menu.portfolio' },
  { to: '/experience', labelKey: 'menu.experience' },
  { to: '/contact', labelKey: 'menu.contact' },
];

export const HeaderMenu: FC = () => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === 'dark';

  return (
    <nav className="flex items-center gap-6">
      <ul className="flex items-center gap-4">
        {menuItems.map(({ to, labelKey }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => cn(
                "relative px-3 py-2 text-sm font-medium transition-colors",
                "before:absolute before:inset-x-3 before:bottom-0 before:h-0.5 before:scale-x-0 before:transition-transform",
                "hover:before:scale-x-100",
                isDark
                  ? [
                      "text-cyan-100/80 hover:text-cyan-100",
                      "before:bg-cyan-400/50",
                      isActive && "text-cyan-400 before:scale-x-100 before:bg-cyan-400"
                    ]
                  : [
                      "text-zinc-600 hover:text-zinc-900",
                      "before:bg-indigo-500/50",
                      isActive && "text-indigo-600 before:scale-x-100 before:bg-indigo-500"
                    ]
              )}
            >
              {t(labelKey)}
            </NavLink>
          </li>
        ))}
      </ul>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <LocaleSwitcher />
      </motion.div>
    </nav>
  );
}; 