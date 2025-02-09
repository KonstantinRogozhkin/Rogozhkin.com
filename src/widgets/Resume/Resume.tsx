import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';
import { motion } from 'framer-motion';
import { useTheme } from '@/entities/theme';
import { cn } from '@/shared/lib/utils';

const timeline = [
  {
    period: 'Январь 2024 - Настоящее время',
    company: 'NEiRA',
    position: 'coFounder / CTO',
    description: 'Разработка AI-агентов, способных автоматизировать любые бизнес-процессы: реклама, продажи, HR и многое другое.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    )
  },
  {
    period: 'Август 2017 - Февраль 2022',
    company: 'AISales',
    position: 'coFounder / CTO',
    description: 'Разработка чат-ботов с использованием NLP и машинного обучения для автоматизации продаж и поддержки клиентов. Создание системы прогнозирования спроса с использованием анализа временных рядов.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    )
  },
  {
    period: 'Январь 2015 - 2017',
    company: 'CallProfit',
    position: 'coFounder / CTO',
    achievements: [
      'Создание и внедрение веб-сайта',
      'Внедрение Bitrix24 CRM',
      'Автоматизация бизнес-процессов',
      'Интеграция CRM колл-центра с внешними системами',
      'Разработка модулей для системы Oktell',
      'Визуализация отчетов (Google DataStudio)'
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    )
  }
];

const education = {
  period: '2007 - 2012',
  institution: 'Вятский Государственный Гуманитарный Университет',
  degree: 'Информатик-экономист',
  specialization: 'Специальность «Прикладная информатика (в экономике)»',
  icon: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 016.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z" />
  )
};

export const Resume: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Section id="resume" className="relative overflow-hidden">
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
            <span className="opacity-50">&lt;</span> Резюме <span className="opacity-50">/&gt;</span>
          </h2>
          <p className={cn(
            "text-lg max-w-3xl mx-auto",
            isDark ? "text-cyan-100/60" : "text-zinc-600"
          )}>
            Мой профессиональный путь в сфере технологий и предпринимательства
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={cn(
            "absolute left-6 top-4 bottom-4 w-0.5",
            isDark ? "bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-purple-500/30" : "bg-gradient-to-b from-indigo-600 via-indigo-400/50 to-indigo-300/30"
          )} />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div className={cn(
                  "absolute left-4 top-4 w-4 h-4 rounded-full -translate-x-2",
                  "border-2",
                  isDark 
                    ? "bg-cyan-500/20 border-cyan-500" 
                    : "bg-indigo-100 border-indigo-600"
                )} />

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
                    "relative p-6 rounded-lg",
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
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-lg flex items-center justify-center shrink-0 relative overflow-hidden",
                          "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                          "group-hover:before:animate-[shimmer_1s_ease-in-out]",
                          isDark 
                            ? "bg-cyan-500/10 text-cyan-400" 
                            : "bg-indigo-100 text-indigo-600"
                        )}>
                          <svg 
                            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            {item.icon}
                          </svg>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4 flex-wrap">
                            <h3 className={cn(
                              "text-xl font-bold",
                              isDark ? "text-cyan-400" : "text-indigo-600"
                            )}>{item.company}</h3>
                            <motion.span
                              whileHover={{ y: -2 }}
                              className={cn(
                                "px-3 py-1 rounded text-sm font-medium relative overflow-hidden",
                                "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                                "hover:before:animate-[shimmer_1s_ease-in-out]",
                                isDark 
                                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                                  : "bg-indigo-50 text-indigo-600 border border-indigo-200"
                              )}
                            >
                              {item.period}
                            </motion.span>
                          </div>
                          <div className={cn(
                            "mt-1 font-medium",
                            isDark ? "text-cyan-300" : "text-indigo-500"
                          )}>
                            {item.position}
                          </div>
                          {item.description && (
                            <p className={cn(
                              "mt-2",
                              isDark ? "text-cyan-100/70" : "text-zinc-600"
                            )}>
                              {item.description}
                            </p>
                          )}
                          {item.achievements && (
                            <ul className={cn(
                              "mt-4 space-y-2",
                              isDark ? "text-cyan-100/70" : "text-zinc-600"
                            )}>
                              {item.achievements.map((achievement, i) => (
                                <motion.li 
                                  key={i}
                                  className="flex items-center gap-2"
                                  whileHover={{ x: 2 }}
                                >
                                  <span className={cn(
                                    "w-1.5 h-1.5 rounded-full shrink-0",
                                    isDark ? "bg-cyan-400" : "bg-indigo-600"
                                  )} />
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: timeline.length * 0.1 }}
              className="relative pl-16"
            >
              {/* Timeline Dot */}
              <div className={cn(
                "absolute left-4 top-4 w-4 h-4 rounded-full -translate-x-2",
                "border-2",
                isDark 
                  ? "bg-cyan-500/20 border-cyan-500" 
                  : "bg-indigo-100 border-indigo-600"
              )} />

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
                  "relative p-6 rounded-lg",
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
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center shrink-0 relative overflow-hidden",
                        "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                        "group-hover:before:animate-[shimmer_1s_ease-in-out]",
                        isDark 
                          ? "bg-cyan-500/10 text-cyan-400" 
                          : "bg-indigo-100 text-indigo-600"
                      )}>
                        <svg 
                          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          {education.icon}
                        </svg>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <h3 className={cn(
                            "text-xl font-bold",
                            isDark ? "text-cyan-400" : "text-indigo-600"
                          )}>{education.institution}</h3>
                          <motion.span
                            whileHover={{ y: -2 }}
                            className={cn(
                              "px-3 py-1 rounded text-sm font-medium relative overflow-hidden",
                              "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                              "hover:before:animate-[shimmer_1s_ease-in-out]",
                              isDark 
                                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                                : "bg-indigo-50 text-indigo-600 border border-indigo-200"
                            )}
                          >
                            {education.period}
                          </motion.span>
                        </div>
                        <div className={cn(
                          "mt-1 font-medium",
                          isDark ? "text-cyan-300" : "text-indigo-500"
                        )}>
                          {education.degree}
                        </div>
                        <p className={cn(
                          "mt-2",
                          isDark ? "text-cyan-100/70" : "text-zinc-600"
                        )}>
                          {education.specialization}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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