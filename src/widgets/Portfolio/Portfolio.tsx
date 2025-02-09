import { FC } from 'react';
import { Section } from '@/shared/ui/layouts';
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
      <div className="text-center mb-12 opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            style={{ animationDelay: `${index * 100}ms` }}
            className={cn(
              "group relative p-6 rounded-lg transition-all duration-200",
              "opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]",
              isDark 
                ? "bg-[#0B1120]/90 border border-cyan-500/20 hover:border-cyan-500/40" 
                : "bg-white/80 border border-slate-200 hover:border-indigo-300"
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
          </div>
        ))}
      </div>
    </Section>
  );
}; 