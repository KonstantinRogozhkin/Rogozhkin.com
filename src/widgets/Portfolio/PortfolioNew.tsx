import { FC, useState } from 'react';
import { Section } from '@/shared/ui/layouts';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';
import { cn } from '@/shared/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface Video {
  title: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  metrics?: string[];
  videos?: Video[];
}

export const Portfolio: FC = () => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === 'dark';
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: t('portfolio.projects.aida.title'),
      description: t('portfolio.projects.aida.description'),
      tags: ['AI', 'NLP', 'Python', 'FastAPI', 'PostgreSQL', 'Dialogflow'],
      link: 'https://t.me/aida_finance_bot',
      metrics: [
        '1M+ активных пользователей',
        '$77K пиковый месячный доход',
        '99.9% uptime',
        '25-40% улучшение точности ML'
      ],
      videos: [
        {
          title: 'Демо диалоговой системы #1',
          url: 'https://youtu.be/hVCfZOopJcY'
        },
        {
          title: 'Демо диалоговой системы #2',
          url: 'https://youtu.be/PE-GaVYK0GM'
        }
      ]
    },
    {
      title: t('portfolio.projects.assistant.title'),
      description: t('portfolio.projects.assistant.description'),
      tags: ['AI', 'TypeScript', 'Node.js', 'React', 'OpenAI'],
      link: '#'
    },
    {
      title: t('portfolio.projects.analytics.title'),
      description: t('portfolio.projects.analytics.description'),
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
          {t('portfolio.title')}
        </h2>
        <p className={cn(
          "text-lg max-w-2xl mx-auto",
          isDark ? "text-cyan-100/70" : "text-zinc-600"
        )}>
          {t('portfolio.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            style={{ animationDelay: `${index * 100}ms` }}
            className={cn(
              "group relative rounded-lg transition-all duration-300",
              "opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]",
              expandedProject === index ? "lg:col-span-2 xl:col-span-3" : "",
              isDark 
                ? "bg-[#0B1120]/90 border border-cyan-500/20 hover:border-cyan-500/40" 
                : "bg-white/80 border border-slate-200 hover:border-indigo-300"
            )}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className={cn(
                  "text-xl font-bold",
                  isDark ? "text-cyan-400" : "text-indigo-600"
                )}>
                  {project.title}
                </h3>
                {project.videos && project.videos.length > 0 && (
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className={cn(
                      "px-3 py-1 text-xs font-medium rounded-md transition-all",
                      isDark
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20"
                        : "bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100"
                    )}
                  >
                    {expandedProject === index ? 'Скрыть видео' : 'Показать видео'}
                  </button>
                )}
              </div>

              <p className={cn(
                "mb-4",
                isDark ? "text-cyan-100/70" : "text-zinc-600"
              )}>
                {project.description}
              </p>

              {project.metrics && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "p-3 rounded-lg text-center",
                        isDark
                          ? "bg-cyan-500/5 border border-cyan-500/10"
                          : "bg-indigo-50/50 border border-indigo-100"
                      )}
                    >
                      <div className={cn(
                        "text-sm font-semibold",
                        isDark ? "text-cyan-400" : "text-indigo-600"
                      )}>
                        {metric.split(' ')[0]}
                      </div>
                      <div className={cn(
                        "text-xs mt-1",
                        isDark ? "text-cyan-100/60" : "text-zinc-500"
                      )}>
                        {metric.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  ))}
                </div>
              )}

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
                {t('portfolio.readMore')} →
              </a>
            </div>

            <AnimatePresence>
              {expandedProject === index && project.videos && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={cn(
                    "p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6",
                    isDark ? "border-t border-cyan-500/10" : "border-t border-slate-200"
                  )}>
                    {project.videos.map((video, videoIdx) => (
                      <div key={videoIdx} className="space-y-2">
                        <h4 className={cn(
                          "text-sm font-medium",
                          isDark ? "text-cyan-300" : "text-indigo-500"
                        )}>
                          {video.title}
                        </h4>
                        <VideoPlayer
                          src={video.url}
                          title={video.title}
                          className="shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
