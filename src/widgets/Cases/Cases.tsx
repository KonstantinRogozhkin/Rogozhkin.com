import { FC, useState, useMemo, memo } from 'react';
import { Section } from '@/shared/ui/layouts';
import { VideoModal } from '@/shared/ui/VideoModal';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';
import { cn } from '@/shared/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  metrics: Record<string, string>;
  videos?: Array<{ title: string; url: string }>;
  category: 'ai' | 'crm' | 'platform';
}

const CasesComponent: FC = () => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === 'dark';
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string; allVideos?: Array<{ title: string; url: string }> } | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'ai' | 'crm' | 'platform'>('all');

  const cases: CaseStudy[] = [
    {
      id: 'aisales',
      category: 'ai',
      title: t('cases.projects.aisales.title'),
      subtitle: t('cases.projects.aisales.subtitle'),
      challenge: t('cases.projects.aisales.challenge'),
      solution: t('cases.projects.aisales.solution'),
      results: [
        'Масштабирование от 0 до 1M+ активных пользователей',
        'Достижение пикового дохода $77K/месяц через AdSense',
        'Улучшение точности ML моделей на 25-40%',
        'Поддержание 99.9% uptime в production',
        'Снижение response time на 70% через оптимизацию БД'
      ],
      technologies: ['Python 3.9+', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS (EC2, S3, RDS)', 'Dialogflow', 'Docker', 'Nginx'],
      metrics: {
        users: '1M+',
        revenue: '$77K/мес',
        uptime: '99.9%',
        accuracy: '+25-40%'
      },
      videos: [
        { title: 'Демо диалоговой системы #1', url: 'https://youtu.be/hVCfZOopJcY' },
        { title: 'Демо диалоговой системы #2', url: 'https://youtu.be/PE-GaVYK0GM' }
      ]
    },
    {
      id: 'neira',
      category: 'platform',
      title: t('cases.projects.neira.title'),
      subtitle: t('cases.projects.neira.subtitle'),
      challenge: t('cases.projects.neira.challenge'),
      solution: t('cases.projects.neira.solution'),
      results: [
        'Автоматизация продаж с сокращением ручной работы на 60%',
        'Real-time inference с latency <200ms',
        'Успешный запуск multi-agent workflows',
        'Production-grade качество AI-generated кода'
      ],
      technologies: ['Python 3.11+', 'FastAPI', 'Corezoid', 'OpenAI API', 'LangChain', 'PostgreSQL', 'Docker', 'AWS'],
      metrics: {
        automation: '60%',
        latency: '<200ms',
        agents: 'Multi-agent',
        quality: 'Production'
      }
    },
    {
      id: 'callprofit',
      category: 'crm',
      title: t('cases.projects.callprofit.title'),
      subtitle: t('cases.projects.callprofit.subtitle'),
      challenge: t('cases.projects.callprofit.challenge'),
      solution: t('cases.projects.callprofit.solution'),
      results: [
        'Увеличение конверсии на 35% через аналитику',
        'Снижение операционных затрат на 40%',
        'Автоматизация 80% рутинных процессов',
        'Построение команды из 5+ инженеров'
      ],
      technologies: ['Bitrix24', 'Oktell', 'PHP', 'MySQL', 'Google DataStudio', 'REST API'],
      metrics: {
        conversion: '+35%',
        costs: '-40%',
        automation: '80%',
        team: '5+ инженеров'
      }
    }
  ];

  const filteredCases = useMemo(() => {
    if (filterCategory === 'all') return cases;
    return cases.filter(c => c.category === filterCategory);
  }, [filterCategory]);

  return (
    <Section
      id="cases"
      className={cn(
        "relative overflow-hidden",
        isDark 
          ? "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]"
          : "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)]"
      )}
    >
      <div className="text-center mb-12 opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold mb-4",
          isDark ? "text-cyan-400" : "text-indigo-600"
        )}>
          <span className="opacity-50">&lt;</span> {t('cases.title')} <span className="opacity-50">/&gt;</span>
        </h2>
        <p className={cn(
          "text-lg max-w-3xl mx-auto mb-8",
          isDark ? "text-cyan-100/70" : "text-zinc-600"
        )}>
          {t('cases.subtitle')}
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-2 flex-wrap">
          {[
            { value: 'all' as const, label: 'Все', icon: '🎯' },
            { value: 'ai' as const, label: 'AI & ML', icon: '🤖' },
            { value: 'platform' as const, label: 'Платформы', icon: '⚡' },
            { value: 'crm' as const, label: 'CRM', icon: '📊' }
          ].map(filter => (
            <button
              key={filter.value}
              onClick={() => setFilterCategory(filter.value)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                "flex items-center gap-2",
                filterCategory === filter.value
                  ? isDark
                    ? "bg-cyan-500/20 text-cyan-400 border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/20"
                    : "bg-indigo-100 text-indigo-600 border-2 border-indigo-300 shadow-lg shadow-indigo-200/50"
                  : isDark
                    ? "bg-cyan-500/5 text-cyan-100/60 border border-cyan-500/10 hover:bg-cyan-500/10 hover:border-cyan-500/20"
                    : "bg-white text-zinc-600 border border-slate-200 hover:bg-indigo-50 hover:border-indigo-200"
              )}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredCases.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.id}
            layout
            style={{ animationDelay: `${index * 100}ms` }}
            className={cn(
              "group relative rounded-lg transition-all duration-300",
              "opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]",
              selectedCase === caseStudy.id ? "lg:col-span-3" : "",
              isDark 
                ? "bg-[#0B1120]/90 border border-cyan-500/20 hover:border-cyan-500/40" 
                : "bg-white/80 border border-slate-200 hover:border-indigo-300"
            )}
          >
            {/* Card Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className={cn(
                    "text-xl font-bold mb-1",
                    isDark ? "text-cyan-400" : "text-indigo-600"
                  )}>
                    {caseStudy.title}
                  </h3>
                  <p className={cn(
                    "text-sm",
                    isDark ? "text-cyan-100/60" : "text-zinc-500"
                  )}>
                    {caseStudy.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-md transition-all shrink-0 ml-4",
                    isDark
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20"
                      : "bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100"
                  )}
                >
                  {selectedCase === caseStudy.id ? t('cases.closeDetails') : t('cases.viewDetails')}
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {Object.entries(caseStudy.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className={cn(
                      "p-3 rounded-lg text-center",
                      isDark
                        ? "bg-cyan-500/5 border border-cyan-500/10"
                        : "bg-indigo-50/50 border border-indigo-100"
                    )}
                  >
                    <div className={cn(
                      "text-lg font-bold",
                      isDark ? "text-cyan-400" : "text-indigo-600"
                    )}>
                      {value}
                    </div>
                    <div className={cn(
                      "text-xs mt-1 capitalize",
                      isDark ? "text-cyan-100/60" : "text-zinc-500"
                    )}>
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.slice(0, selectedCase === caseStudy.id ? undefined : 4).map(tech => (
                  <span
                    key={tech}
                    className={cn(
                      "px-2 py-1 text-xs rounded",
                      isDark 
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                        : "bg-indigo-50 text-indigo-600 border border-indigo-200"
                    )}
                  >
                    {tech}
                  </span>
                ))}
                {selectedCase !== caseStudy.id && caseStudy.technologies.length > 4 && (
                  <span className={cn(
                    "px-2 py-1 text-xs rounded",
                    isDark ? "text-cyan-100/60" : "text-zinc-500"
                  )}>
                    +{caseStudy.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Expanded Details */}
            <AnimatePresence>
              {selectedCase === caseStudy.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={cn(
                    "p-6 pt-0 space-y-6",
                    isDark ? "border-t border-cyan-500/10" : "border-t border-slate-200"
                  )}>
                    {/* Challenge */}
                    <div>
                      <h4 className={cn(
                        "text-sm font-semibold mb-2 uppercase tracking-wide",
                        isDark ? "text-cyan-300" : "text-indigo-500"
                      )}>
                        Задача
                      </h4>
                      <p className={cn(
                        "text-sm",
                        isDark ? "text-cyan-100/70" : "text-zinc-600"
                      )}>
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className={cn(
                        "text-sm font-semibold mb-2 uppercase tracking-wide",
                        isDark ? "text-cyan-300" : "text-indigo-500"
                      )}>
                        Решение
                      </h4>
                      <p className={cn(
                        "text-sm",
                        isDark ? "text-cyan-100/70" : "text-zinc-600"
                      )}>
                        {caseStudy.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className={cn(
                        "text-sm font-semibold mb-3 uppercase tracking-wide",
                        isDark ? "text-cyan-300" : "text-indigo-500"
                      )}>
                        Результаты
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li
                            key={idx}
                            className={cn(
                              "flex items-start gap-2 text-sm",
                              isDark ? "text-cyan-100/70" : "text-zinc-600"
                            )}
                          >
                            <span className={cn(
                              "w-1.5 h-1.5 rounded-full mt-1.5 shrink-0",
                              isDark ? "bg-cyan-400" : "bg-indigo-600"
                            )} />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Videos */}
                    {caseStudy.videos && caseStudy.videos.length > 0 && (
                      <div>
                        <h4 className={cn(
                          "text-sm font-semibold mb-3 uppercase tracking-wide",
                          isDark ? "text-cyan-300" : "text-indigo-500"
                        )}>
                          Демонстрация
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.videos.map((video, videoIdx) => (
                            <button
                              key={videoIdx}
                              onClick={() => setSelectedVideo({ ...video, allVideos: caseStudy.videos })}
                              className={cn(
                                "inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300",
                                "hover:scale-105 active:scale-95",
                                isDark 
                                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20" 
                                  : "bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-200/50"
                              )}
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                              {video.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          playlist={selectedVideo.allVideos}
        />
      )}
    </Section>
  );
};

export const Cases = memo(CasesComponent);
