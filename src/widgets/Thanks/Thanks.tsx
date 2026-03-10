import { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';

export const Thanks: FC = () => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === 'dark';

  const strengths = t('thanks.profile_summary.strengths.items', { returnObjects: true }) as unknown as string[];
  const formFields = t('thanks.profile_summary.form.items', { returnObjects: true }) as unknown as string[];
  const cvItems = t('thanks.profile_summary.cv.items', { returnObjects: true }) as unknown as string[];
  const coverLetterItems = t('thanks.profile_summary.cover_letter.items', { returnObjects: true }) as unknown as string[];
  const nextSteps = t('thanks.profile_summary.next_steps.items', { returnObjects: true }) as unknown as string[];

  const sections = [
    {
      key: 'form',
      title: t('thanks.profile_summary.form.title'),
      description: t('thanks.profile_summary.form.description'),
      items: formFields
    },
    {
      key: 'cv',
      title: t('thanks.profile_summary.cv.title'),
      description: t('thanks.profile_summary.cv.description'),
      items: cvItems
    },
    {
      key: 'cover_letter',
      title: t('thanks.profile_summary.cover_letter.title'),
      description: t('thanks.profile_summary.cover_letter.description'),
      items: coverLetterItems
    },
    {
      key: 'next_steps',
      title: t('thanks.profile_summary.next_steps.title'),
      description: t('thanks.profile_summary.next_steps.description'),
      items: nextSteps
    }
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
                "p-6 rounded border",
                isDark 
                  ? "bg-cyan-500/5 border-cyan-500/20" 
                  : "bg-indigo-50/50 border-indigo-200/50"
              )}>
                <p className={cn(
                  "text-lg text-center font-medium",
                  isDark ? "text-cyan-100" : "text-zinc-700"
                )}>
                  {t('thanks.profile_summary.subtitle')}
                </p>

                <p className={cn(
                  "text-center mt-3",
                  isDark ? "text-cyan-100/70" : "text-zinc-600"
                )}>
                  {t('thanks.profile_summary.summary')}
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-5">
                  {strengths.map((item) => (
                    <motion.span
                      key={item}
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
                      {item}
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
                  <span className={isDark ? "text-cyan-400" : "text-indigo-600"}>{"<PROFILE />"}</span> {t('thanks.profile_summary.exceptional_work.label')}
                </p>

                <p className={cn(
                  "text-center text-lg leading-relaxed",
                  isDark ? "text-cyan-100/80" : "text-zinc-700"
                )}>
                  {t('thanks.profile_summary.exceptional_work.text')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.key}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={cn(
                      "rounded-lg p-6 h-full",
                      isDark
                        ? "bg-[#08101E]/90 border border-cyan-500/15"
                        : "bg-slate-50/80 border border-slate-200"
                    )}
                  >
                    <h3 className={cn(
                      "text-xl font-bold",
                      isDark ? "text-cyan-400" : "text-indigo-600"
                    )}>
                      {section.title}
                    </h3>

                    <p className={cn(
                      "mt-3",
                      isDark ? "text-cyan-100/70" : "text-zinc-600"
                    )}>
                      {section.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            "flex items-start gap-3",
                            isDark ? "text-cyan-100/75" : "text-zinc-700"
                          )}
                        >
                          <span className={cn(
                            "mt-2 block h-1.5 w-1.5 rounded-full shrink-0",
                            isDark ? "bg-cyan-400" : "bg-indigo-600"
                          )} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
                
              <div className={cn(
                "p-6 rounded border",
                isDark
                  ? "bg-cyan-500/5 border-cyan-500/20"
                  : "bg-indigo-50/60 border-indigo-200/60"
              )}>
                <p className={cn(
                  "text-center font-medium",
                  isDark ? "text-cyan-100/80" : "text-zinc-600"
                )}>
                  {t('thanks.profile_summary.cta.prefix')}{' '}
                  <motion.a 
                    href="https://github.com/KonstantinRogozhkin" 
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
                  . {t('thanks.profile_summary.cta.middle')}{' '}
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
                  {' '}{t('thanks.profile_summary.cta.suffix')}
                </p>

                <div className="mt-6 flex justify-center">
                  <motion.a
                    href="https://github.com/KonstantinRogozhkin"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors",
                      isDark
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/20"
                        : "bg-indigo-600 text-white border border-indigo-500 hover:bg-indigo-500"
                    )}
                  >
                    {t('thanks.profile_summary.cta.button')}
                    <span className="text-sm opacity-80">↗</span>
                  </motion.a>
                </div>
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