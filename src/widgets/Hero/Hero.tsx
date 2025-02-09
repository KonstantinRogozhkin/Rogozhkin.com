import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/entities/theme';
import { cn } from '@/shared/lib/utils';

export const Hero: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <Section 
      id="hero" 
      className={cn(
        "min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden will-change-transform",
        isDark 
          ? "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_-20%,rgba(34,211,238,0.15),transparent_70%)]"
          : "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_-20%,rgba(79,70,229,0.15),transparent_70%)]"
      )}
    >
      {isDark ? (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-indigo-500/10 via-transparent to-blue-500/10" />
          <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-10" />
        </div>
      )}

      <motion.div 
        className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12"
        style={{ opacity, scale }}
      >
        {/* Photo Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 group will-change-transform"
        >
          {/* Main circle with photo */}
          <div className={cn(
            "absolute inset-0 rounded-full overflow-hidden border-2 transition-transform duration-300 transform group-hover:scale-105 will-change-transform",
            isDark 
              ? "border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              : "border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.3)] group-hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
          )}>
            {/* Photo */}
            <img 
              src="/main-photo.png" 
              alt="Konstantin Rogozhkin"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight will-change-transform",
                isDark 
                  ? "bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
              )}
            >
              Константин Рогожкин
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={cn(
                "text-xl md:text-2xl font-medium",
                isDark ? "text-cyan-100/80" : "text-zinc-600"
              )}
            >
              CTO, создатель AI-продуктов
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={cn(
              "text-lg space-y-4 max-w-3xl leading-relaxed",
              isDark ? "text-cyan-100/70" : "text-zinc-600"
            )}
          >
            <p>
              15+ лет помогаю бизнесу расти через автоматизацию и AI. Создатель более чем 3 успешных IT бизнесов.
            </p>
            
            <p>
            Моя личная цель - зарабатывать $1M в год с помощью IT и AI технологий.
            </p>
            <p>
            Моя миссия - освободить людей от рутины и дать им возможность сосредоточиться на творчестве, стратегии и по-настоящему важной работе.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#contact" 
              className={cn(
                "px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 will-change-transform",
                isDark 
                  ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:from-cyan-400 hover:to-cyan-300" 
                  : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:shadow-lg hover:from-indigo-500 hover:to-blue-500"
              )}
            >
              Связаться
            </a>
            <a 
              href="#portfolio" 
              className={cn(
                "px-8 py-4 rounded-lg font-medium transition-all duration-300 relative group transform hover:scale-105 will-change-transform",
                isDark 
                  ? "bg-[#0B1120]/50 border border-cyan-500/30 text-cyan-100 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]" 
                  : "bg-white/50 backdrop-blur-sm border border-indigo-200 text-indigo-600 hover:bg-indigo-50/50 hover:border-indigo-300 hover:shadow-lg"
              )}
            >
              <span className="relative z-10">Портфолио</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}; 