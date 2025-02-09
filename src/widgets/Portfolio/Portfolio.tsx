import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';
import { motion } from 'framer-motion';
import { useTheme } from '@/entities/theme';
import { cn } from '@/shared/lib/utils';

export const Portfolio: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const projects = [
    {
      title: 'AIDA Finance Bot',
      description: 'Финансовый чат-бот с аудиторией более 1 млн пользователей. Использует NLP и ML для автоматизации продаж и поддержки.',
      tags: ['AI', 'NLP', 'Python', 'FastAPI', 'PostgreSQL'],
      link: 'https://t.me/aida_finance_bot'
    },
    {
      title: 'AI Code Assistant',
      description: 'Интеллектуальный помощник для разработчиков. Анализирует код, предлагает улучшения и помогает в отладке.',
      tags: ['AI', 'TypeScript', 'Node.js', 'React', 'OpenAI'],
      link: '#'
    },
    {
      title: 'Smart Analytics Platform',
      description: 'Платформа для анализа данных с использованием ML. Предсказывает тренды и аномалии в реальном времени.',
      tags: ['Python', 'TensorFlow', 'React', 'AWS'],
      link: '#'
    }
  ];

  return (
    <Section
      id="portfolio"
      className={cn(
        "relative overflow-hidden",
        isDark 
          ? "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]"
          : "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)]"
      )}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={cn(
            "text-3xl font-bold mb-4",
            isDark ? "text-cyan-400" : "text-indigo-600"
          )}>
            Портфолио
          </h2>
          <p className={cn(
            "text-lg max-w-2xl mx-auto",
            isDark ? "text-cyan-100/70" : "text-zinc-600"
          )}>
            Избранные проекты, демонстрирующие мой опыт в разработке AI-решений и автоматизации бизнес-процессов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group relative p-6 rounded-lg transition-transform duration-300 will-change-transform hover:-translate-y-2",
                isDark 
                  ? "bg-[#0B1120]/90 border border-cyan-500/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]" 
                  : "bg-white/80 border border-slate-200 hover:shadow-xl"
              )}
            >
              <h3 className={cn(
                "text-xl font-bold mb-3",
                isDark ? "text-cyan-400" : "text-indigo-600"
              )}>
                {project.title}
              </h3>
              <p className={cn(
                "mb-4",
                isDark ? "text-cyan-100/70" : "text-zinc-600"
              )}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className={cn(
                      "px-2 py-1 text-sm rounded",
                      isDark 
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                        : "bg-indigo-50 text-indigo-600 border border-indigo-200"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center text-sm font-medium transition-colors",
                  isDark 
                    ? "text-cyan-400 hover:text-cyan-300" 
                    : "text-indigo-600 hover:text-indigo-500"
                )}
              >
                Подробнее →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}; 