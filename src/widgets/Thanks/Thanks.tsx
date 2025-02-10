import { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';

export const Thanks: FC = () => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === 'dark';

  const technologies = [
    'React 18',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'React Router v7',
    'Zustand',
    'TanStack Query',
    'Feature-Sliced Design',
    'React Hook Form + Zod',
    'Claude AI'
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={cn(
          "absolute inset-0 opacity-5",
          isDark ? "bg-[url('/grid.svg')]" : "bg-[url('/grid-light.svg')]"
        )} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "container mx-auto px-4",
          "relative z-10"
        )}
      >
        <div className={cn(
          "max-w-4xl mx-auto",
          "relative before:absolute before:-inset-0.5 before:blur-sm before:opacity-50",
          isDark 
            ? "before:bg-gradient-to-br before:from-cyan-500/30 before:via-transparent before:to-purple-500/30" 
            : "before:bg-gradient-to-br before:from-indigo-200/50 before:via-transparent before:to-blue-200/50"
        )}>
          <div className={cn(
            "relative rounded-lg p-8",
            isDark 
              ? "bg-[#0B1120]/90 border border-cyan-500/20" 
              : "bg-white/80 border border-slate-200"
          )}>
            {/* Decorative Corner Elements */}
            <div className="absolute -top-px -left-px w-8 h-8 border-t border-l rounded-tl-lg border-current opacity-30" />
            <div className="absolute -top-px -right-px w-8 h-8 border-t border-r rounded-tr-lg border-current opacity-30" />
            <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l rounded-bl-lg border-current opacity-30" />
            <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r rounded-br-lg border-current opacity-30" />

            <h2 className={cn(
              "text-3xl font-bold mb-6 text-center tracking-wider uppercase",
              isDark ? "text-cyan-400" : "text-indigo-600"
            )}>
              <span className="opacity-50">&lt;</span> {t('thanks.title')} <span className="opacity-50">/&gt;</span>
            </h2>
            
            <div className="space-y-8">
              <div className={cn(
                "p-4 rounded border",
                isDark 
                  ? "bg-cyan-500/5 border-cyan-500/20" 
                  : "bg-indigo-50/50 border-indigo-200/50"
              )}>
                <p className={cn(
                  "text-lg text-center font-medium",
                  isDark ? "text-cyan-100" : "text-zinc-700"
                )}>
                  {t('thanks.stack_title')}
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={cn(
                        "px-4 py-1.5 rounded text-sm font-medium relative overflow-hidden",
                        "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                        "hover:before:animate-[shimmer_1s_ease-in-out]",
                        isDark 
                          ? "bg-cyan-950/50 text-cyan-400 border border-cyan-500/30" 
                          : "bg-indigo-100/50 text-indigo-700 border border-indigo-200"
                      )}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className={cn(
                "p-6 rounded relative",
                isDark 
                  ? "bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20" 
                  : "bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/50"
              )}>
                <div className={cn(
                  "absolute top-0 left-0 w-full h-1 bg-gradient-to-r",
                  isDark 
                    ? "from-cyan-500/50 via-transparent to-purple-500/50" 
                    : "from-indigo-400/30 via-transparent to-blue-400/30"
                )} />
                
                <p className={cn(
                  "text-center font-medium mb-4",
                  isDark ? "text-cyan-100" : "text-zinc-700"
                )}>
                  <span className={isDark ? "text-cyan-400" : "text-indigo-600"}>{"<AI />"}</span> {t('thanks.ai_description')}
                </p>
                
                <p className={cn(
                  "text-center",
                  isDark ? "text-cyan-100/80" : "text-zinc-600"
                )}>
                  {t('thanks.github_link')}{' '}
                  <motion.a 
                    href="https://github.com/KonstantinRogozhkin/Rogozhkin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -1 }}
                    className={cn(
                      "font-medium inline-flex items-center gap-1 transition-colors",
                      isDark ? "text-cyan-400 hover:text-cyan-300" : "text-indigo-600 hover:text-indigo-500"
                    )}
                  >
                    GitHub
                    <span className="text-xs opacity-50">↗</span>
                  </motion.a>
                  . {t('thanks.telegram_text')}{' '}
                  <motion.a 
                    href="https://t.me/konstik" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -1 }}
                    className={cn(
                      "font-medium inline-flex items-center gap-1 transition-colors",
                      isDark ? "text-cyan-400 hover:text-cyan-300" : "text-indigo-600 hover:text-indigo-500"
                    )}
                  >
                    {t('thanks.telegram_link_text')}
                    <span className="text-xs opacity-50">↗</span>
                  </motion.a>
                  {' '}{t('thanks.video_text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[100px] animate-pulse" />
          <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[100px] animate-pulse delay-700" />
        </div>
      )}
    </section>
  );
}; 