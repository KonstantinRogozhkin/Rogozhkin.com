import { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';

export const LocaleSwitcher: FC = () => {
  const { theme } = useTheme();
  const { currentLanguage, toggleLanguage, t } = useLocale();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-3 py-1.5 rounded text-sm font-medium relative overflow-hidden",
        "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
        "hover:before:animate-[shimmer_1s_ease-in-out]",
        isDark 
          ? "bg-cyan-950/50 text-cyan-400 border border-cyan-500/30" 
          : "bg-indigo-100/50 text-indigo-700 border border-indigo-200"
      )}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {t(`language.${currentLanguage}`)}
        <span className="text-xs opacity-50">
          {currentLanguage === 'en' ? '🇬🇧' : '🇷🇺'}
        </span>
      </span>
    </motion.button>
  );
}; 