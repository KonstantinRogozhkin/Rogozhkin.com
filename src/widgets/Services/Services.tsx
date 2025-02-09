import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';
import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';

export const Services: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Section id="services" className="relative overflow-hidden">
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
        className="space-y-12 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold tracking-wider uppercase",
            isDark ? "text-cyan-400" : "text-indigo-600"
          )}>
            <span className="opacity-50">&lt;</span> Чем я могу вам помочь <span className="opacity-50">/&gt;</span>
          </h2>
          <p className={cn(
            "text-lg max-w-3xl mx-auto",
            isDark ? "text-cyan-100/60" : "text-zinc-600"
          )}>
            Помогаю бизнесу автоматизировать процессы и увеличивать продажи с помощью искусственного интеллекта
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Development */}
          <motion.div
            whileHover={{ y: -4 }}
            className={cn(
              "group relative",
              "before:absolute before:-inset-0.5 before:blur-sm before:opacity-50",
              isDark 
                ? "before:bg-gradient-to-br before:from-cyan-500/30 before:via-transparent before:to-purple-500/30" 
                : "before:bg-gradient-to-br before:from-indigo-200/50 before:via-transparent before:to-blue-200/50"
            )}
          >
            <div className={cn(
              "relative p-6 rounded-lg h-full",
              isDark 
                ? "bg-[#0B1120]/90 border border-cyan-500/20" 
                : "bg-white/80 border border-slate-200"
            )}>
              {/* Decorative Corner Elements */}
              <div className="absolute -top-px -left-px w-8 h-8 border-t border-l rounded-tl-lg border-current opacity-30" />
              <div className="absolute -top-px -right-px w-8 h-8 border-t border-r rounded-tr-lg border-current opacity-30" />
              <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l rounded-bl-lg border-current opacity-30" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r rounded-br-lg border-current opacity-30" />

              <div className="space-y-4">
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden",
                  "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                  "group-hover:before:animate-[shimmer_1s_ease-in-out]",
                  isDark 
                    ? "bg-cyan-500/10 text-cyan-400" 
                    : "bg-indigo-100 text-indigo-600"
                )}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={cn(
                  "text-xl font-bold",
                  isDark ? "text-cyan-400" : "text-indigo-600"
                )}>AI Разработка</h3>
                <p className={cn(
                  isDark ? "text-cyan-100/70" : "text-zinc-600"
                )}>
                  Разработка интеллектуальных систем с использованием последних достижений в области AI/ML
                </p>
                <ul className="space-y-2">
                  {['Чат-боты на базе GPT', 'Системы автоматизации', 'ML-модели для бизнеса'].map((item) => (
                    <motion.li 
                      key={item}
                      className={cn(
                        "flex items-center gap-2 relative pl-4",
                        isDark ? "text-cyan-100/60" : "text-zinc-600"
                      )}
                      whileHover={{ x: 2 }}
                    >
                      <span className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full",
                        isDark ? "bg-cyan-400" : "bg-indigo-600"
                      )} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Consulting */}
          <motion.div
            whileHover={{ y: -4 }}
            className={cn(
              "group relative",
              "before:absolute before:-inset-0.5 before:blur-sm before:opacity-50",
              isDark 
                ? "before:bg-gradient-to-br before:from-cyan-500/30 before:via-transparent before:to-purple-500/30" 
                : "before:bg-gradient-to-br before:from-indigo-200/50 before:via-transparent before:to-blue-200/50"
            )}
          >
            <div className={cn(
              "relative p-6 rounded-lg h-full",
              isDark 
                ? "bg-[#0B1120]/90 border border-cyan-500/20" 
                : "bg-white/80 border border-slate-200"
            )}>
              {/* Decorative Corner Elements */}
              <div className="absolute -top-px -left-px w-8 h-8 border-t border-l rounded-tl-lg border-current opacity-30" />
              <div className="absolute -top-px -right-px w-8 h-8 border-t border-r rounded-tr-lg border-current opacity-30" />
              <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l rounded-bl-lg border-current opacity-30" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r rounded-br-lg border-current opacity-30" />

              <div className="space-y-4">
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden",
                  "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                  "group-hover:before:animate-[shimmer_1s_ease-in-out]",
                  isDark 
                    ? "bg-cyan-500/10 text-cyan-400" 
                    : "bg-indigo-100 text-indigo-600"
                )}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={cn(
                  "text-xl font-bold",
                  isDark ? "text-cyan-400" : "text-indigo-600"
                )}>Консалтинг</h3>
                <p className={cn(
                  isDark ? "text-cyan-100/70" : "text-zinc-600"
                )}>
                  Помощь в выборе и внедрении оптимальных решений для вашего бизнеса
                </p>
                <ul className="space-y-2">
                  {['Аудит процессов', 'Стратегия автоматизации', 'Оптимизация затрат'].map((item) => (
                    <motion.li 
                      key={item}
                      className={cn(
                        "flex items-center gap-2 relative pl-4",
                        isDark ? "text-cyan-100/60" : "text-zinc-600"
                      )}
                      whileHover={{ x: 2 }}
                    >
                      <span className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full",
                        isDark ? "bg-cyan-400" : "bg-indigo-600"
                      )} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Integration */}
          <motion.div
            whileHover={{ y: -4 }}
            className={cn(
              "group relative",
              "before:absolute before:-inset-0.5 before:blur-sm before:opacity-50",
              isDark 
                ? "before:bg-gradient-to-br before:from-cyan-500/30 before:via-transparent before:to-purple-500/30" 
                : "before:bg-gradient-to-br before:from-indigo-200/50 before:via-transparent before:to-blue-200/50"
            )}
          >
            <div className={cn(
              "relative p-6 rounded-lg h-full",
              isDark 
                ? "bg-[#0B1120]/90 border border-cyan-500/20" 
                : "bg-white/80 border border-slate-200"
            )}>
              {/* Decorative Corner Elements */}
              <div className="absolute -top-px -left-px w-8 h-8 border-t border-l rounded-tl-lg border-current opacity-30" />
              <div className="absolute -top-px -right-px w-8 h-8 border-t border-r rounded-tr-lg border-current opacity-30" />
              <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l rounded-bl-lg border-current opacity-30" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r rounded-br-lg border-current opacity-30" />

              <div className="space-y-4">
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden",
                  "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                  "group-hover:before:animate-[shimmer_1s_ease-in-out]",
                  isDark 
                    ? "bg-cyan-500/10 text-cyan-400" 
                    : "bg-indigo-100 text-indigo-600"
                )}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className={cn(
                  "text-xl font-bold",
                  isDark ? "text-cyan-400" : "text-indigo-600"
                )}>Интеграция</h3>
                <p className={cn(
                  isDark ? "text-cyan-100/70" : "text-zinc-600"
                )}>
                  Интеграция AI-решений с существующими системами и процессами
                </p>
                <ul className="space-y-2">
                  {['CRM системы', 'Мессенджеры', 'API интеграции'].map((item) => (
                    <motion.li 
                      key={item}
                      className={cn(
                        "flex items-center gap-2 relative pl-4",
                        isDark ? "text-cyan-100/60" : "text-zinc-600"
                      )}
                      whileHover={{ x: 2 }}
                    >
                      <span className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full",
                        isDark ? "bg-cyan-400" : "bg-indigo-600"
                      )} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[100px] animate-pulse" />
          <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[100px] animate-pulse delay-700" />
        </div>
      )}
    </Section>
  );
}; 