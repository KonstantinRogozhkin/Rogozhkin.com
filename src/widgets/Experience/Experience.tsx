import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';
import { motion } from 'framer-motion';
import { useTheme } from '@/entities/theme';
import { cn } from '@/shared/lib/utils';

const experiences = [
  {
    period: '2020 - настоящее время',
    company: 'AISales',
    position: 'Lead AI Engineer',
    description: 'Разработка и внедрение AI-решений для автоматизации продаж. Создание чат-ботов с использованием NLP.'
  },
  {
    period: '2018 - 2020',
    company: 'DataCraft',
    position: 'Senior Data Scientist',
    description: 'Разработка систем прогнозирования и аналитики. Оптимизация бизнес-процессов с помощью ML.'
  },
  {
    period: '2015 - 2018',
    company: 'TechInnovate',
    position: 'ML Engineer',
    description: 'Создание и внедрение ML-моделей для анализа данных и автоматизации процессов.'
  }
];

export const Experience: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Section 
      id="experience" 
      className={cn(
        "relative py-20",
        isDark 
          ? "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_100%_20%,rgba(192,132,252,0.15),transparent_70%)]"
          : "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_100%_20%,rgba(79,70,229,0.1),transparent_70%)]"
      )}
    >
      {isDark ? (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/10 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-10" />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-500/10 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative space-y-12"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "text-3xl md:text-4xl font-bold text-center",
            isDark 
              ? "bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,132,252,0.3)]"
              : "bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(79,70,229,0.2)]"
          )}
        >
          Опыт работы
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5",
                isDark 
                  ? "before:bg-gradient-to-b before:from-purple-400 before:via-cyan-400 before:to-purple-400" 
                  : "before:bg-gradient-to-b before:from-indigo-600 before:via-blue-600 before:to-indigo-600"
              )}
            >
              <div className={cn(
                "absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full",
                isDark 
                  ? "bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)]" 
                  : "bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.3)]"
              )} />
              
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className={cn(
                    "text-sm",
                    isDark ? "text-purple-300/60" : "text-indigo-600/60"
                  )}>
                    {exp.period}
                  </span>
                  <span className={cn(
                    "px-2 py-1 text-sm rounded",
                    isDark 
                      ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" 
                      : "bg-indigo-50 text-indigo-600 border border-indigo-200"
                  )}>
                    {exp.position}
                  </span>
                </div>
                
                <h3 className={cn(
                  "text-xl font-semibold",
                  isDark ? "text-purple-100" : "text-indigo-900"
                )}>
                  {exp.company}
                </h3>
                
                <p className={cn(
                  "text-base",
                  isDark ? "text-purple-100/70" : "text-zinc-600"
                )}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}; 