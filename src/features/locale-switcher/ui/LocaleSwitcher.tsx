import { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';

export const LocaleSwitcher: FC = () => {
  const { theme } = useTheme();
  const { currentLanguage, toggleLanguage } = useLocale();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-2 relative overflow-hidden group",
        isDark 
          ? "text-cyan-400 hover:text-cyan-300" 
          : "text-indigo-600 hover:text-indigo-500"
      )}
    >
      <span className="relative z-10 font-cyber tracking-widest uppercase text-xs">
        {currentLanguage === 'en' ? 'EN' : 'RU'}
      </span>
    </motion.button>
  );
}; 