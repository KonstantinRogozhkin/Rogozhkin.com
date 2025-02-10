import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';
import { cn } from '@/shared/lib/utils';

export const Hero: FC = () => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === 'dark';
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <Section 
      id="hero" 
      className={cn(
        "min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden will-change-transform",
        isDark && "before:absolute before:inset-0 before:bg-cover before:bg-center before:bg-no-repeat before:bg-[url('/images/Starship-2019-Mars-base-render-SpaceX-1-full-crop-c.jpg')] before:opacity-60",
        "after:absolute after:inset-0",
        isDark 
          ? "after:bg-[radial-gradient(circle_at_50%_-20%,rgba(34,211,238,0.2),transparent_70%)] after:bg-[#0B1120]/40" 
          : "after:bg-[radial-gradient(circle_at_50%_-20%,rgba(79,70,229,0.1),transparent_70%)] after:bg-gradient-to-b after:from-white after:to-gray-50/80"
      )}
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className={cn(
          "absolute inset-0 opacity-5",
          isDark ? "bg-[url('/grid.svg')]" : "bg-[url('/grid-light.svg')]"
        )} />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute w-[40rem] h-[40rem] rounded-full mix-blend-multiply filter blur-3xl opacity-30",
              isDark ? "bg-cyan-900" : "bg-indigo-600"
            )}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10">
        <div className={cn(
          "absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r",
          isDark 
            ? "from-cyan-950/80 via-cyan-900/60 to-blue-950/80" 
            : "from-indigo-100/70 via-transparent to-indigo-100/70"
        )} />
      </div>

      <motion.div 
        className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-20"
        style={{ opacity, scale, y }}
      >
        {/* Photo Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 group will-change-transform"
        >
          {/* Outer rotating border */}
          <div className={cn(
            "absolute -inset-1 rounded-full animate-border",
            isDark 
              ? "bg-[conic-gradient(from_0deg,#06b6d4,#0ea5e9,#2563eb,#06b6d4)] animate-[borderGlow_4s_ease-in-out_infinite]" 
              : "bg-[conic-gradient(from_0deg,#4f46e5,#60a5fa,#4f46e5)] animate-[borderGlow_4s_ease-in-out_infinite]"
          )} />

          {/* Inner rotating border */}
          <div className={cn(
            "absolute inset-0 rounded-full animate-border-reverse",
            isDark 
              ? "bg-[conic-gradient(from_180deg,#06b6d4,#0ea5e9,#2563eb,#06b6d4)]" 
              : "bg-[conic-gradient(from_180deg,#4f46e5,#60a5fa,#4f46e5)]"
          )} />

          {/* Main circle with photo */}
          <div className={cn(
            "absolute inset-[3px] rounded-full overflow-hidden transition-transform duration-300 transform group-hover:scale-105 will-change-transform backdrop-blur-sm",
            isDark 
              ? "shadow-[0_0_25px_rgba(34,211,238,0.5)] bg-[#0B1120]/80"
              : "shadow-[0_0_25px_rgba(79,70,229,0.5)] bg-white/80"
          )}>
            {/* Photo */}
            <img 
              src="/main-photo.png" 
              alt="Konstantin Rogozhkin"
              className="w-full h-full object-cover transition-all duration-300"
              loading="eager"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className={cn(
                  "absolute w-1 h-1 rounded-full",
                  isDark ? "bg-cyan-400" : "bg-indigo-600"
                )}
                style={{
                  left: `${50 + 45 * Math.cos(2 * Math.PI * i / 8)}%`,
                  top: `${50 + 45 * Math.sin(2 * Math.PI * i / 8)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
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
                "font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase will-change-transform relative z-30",
                isDark 
                  ? "text-cyan-400"
                  : "text-indigo-600"
              )}
            >
              <span className="relative inline-block">
                {t('hero.name')}
                <motion.span 
                  className={cn(
                    "absolute -inset-2 -z-10 opacity-20 blur-2xl",
                    isDark ? "bg-cyan-400" : "bg-indigo-600"
                  )}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={cn(
                "font-cyber text-xl md:text-2xl font-medium relative z-30",
                isDark ? "text-cyan-100" : "text-zinc-800"
              )}
            >
              {t('hero.position')}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={cn(
              "font-sans text-lg space-y-4 max-w-3xl leading-relaxed z-30",
              isDark ? "text-cyan-100/90" : "text-zinc-800"
            )}
          >
            <p>{t('hero.description.experience')}</p>
            <p>{t('hero.description.goal')}</p>
            <p>{t('hero.description.mission')}</p>
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
                "font-cyber px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 will-change-transform relative group overflow-hidden",
                isDark 
                  ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:from-cyan-400 hover:to-cyan-300" 
                  : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:shadow-lg hover:from-indigo-500 hover:to-blue-500"
              )}
            >
              <span className="relative z-10">{t('hero.buttons.contact')}</span>
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
              </div>
            </a>
            <a 
              href="#portfolio" 
              className={cn(
                "font-cyber px-8 py-4 rounded-lg font-medium transition-all duration-300 relative group transform hover:scale-105 will-change-transform overflow-hidden",
                isDark 
                  ? "bg-[#0B1120]/50 border border-cyan-500/30 text-cyan-100 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]" 
                  : "bg-white/50 backdrop-blur-sm border border-indigo-200 text-indigo-600 hover:bg-indigo-50/50 hover:border-indigo-300 hover:shadow-lg"
              )}
            >
              <span className="relative z-10">{t('hero.buttons.portfolio')}</span>
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={cn(
          "absolute bottom-0 left-1/4 w-1/2 h-1/2 blur-[100px] animate-pulse",
          isDark ? "bg-cyan-500/5" : "bg-indigo-500/5"
        )} />
        <div className={cn(
          "absolute top-0 right-1/4 w-1/2 h-1/2 blur-[100px] animate-pulse delay-700",
          isDark ? "bg-purple-500/5" : "bg-blue-500/5"
        )} />
      </div>
    </Section>
  );
}; 