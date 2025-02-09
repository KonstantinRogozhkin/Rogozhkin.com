import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';
import { motion } from 'framer-motion';
import { useTheme } from '@/entities/theme';
import { cn } from '@/shared/lib/utils';

export const Experience: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skills = [
    {
      title: 'Предпринимательство',
      description: 'Успешный опыт создания и развития технологических стартапов, от идеи до прибыльного бизнеса.',
      items: ['Поиск ниш', 'Монетизация продукта',  'Создание dev команды','Масштабирование']
    },
    {
      title: 'Product Growth Hacking',
      description: 'Глубокая экспертиза в создании продуктов: от исследования рынка и тестирования гипотез до запуска и роста.',
      items: ['Product Discovery', 'Customer Development', 'MVP', 'Product Market Fit', 'Growth Hacking']
    },
    {
      title: 'Искусственный Интеллект',
      description: 'Глубокая экспертиза в разработке и внедрении AI-решений, включая GPT, ML и NLP технологии.',
      items: ['GPT', 'ML', 'NLP', 'Neural Networks', 'Computer Vision']
    },
    {
      title: 'IT / AI Разработка',
      description: 'Создание высоконагруженных систем и микросервисов с использованием современного стека технологий.',
      items: ['Python', 'TypeScript', 'React', 'Node.js', 'Микросервисы']
    },
    {
      title: 'Исследования',
      description: 'Проведение глубоких исследований рынка, анализ конкурентов и тестирование продуктовых гипотез.',
      items: ['Market Research', 'A/B Testing', 'User Research', 'Data Analysis', 'Конкурентный анализ']
    },
    {
      title: 'Аналитика',
      description: 'Анализ данных, построение прогнозных моделей и оптимизация бизнес-процессов.',
      items: ['Big Data', 'Data Science', 'BI', 'Analytics', 'Прогнозирование']
    }
  ];

  return (
    <Section
      id="experience"
      className={cn(
        "relative overflow-hidden",
        isDark 
          ? "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]"
          : "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)]"
      )}
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={cn(
          "absolute inset-0 opacity-5",
          isDark ? "bg-[url('/grid.svg')]" : "bg-[url('/grid-light.svg')]"
        )} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={cn(
            "text-3xl font-bold mb-4 tracking-wider uppercase",
            isDark ? "text-cyan-400" : "text-indigo-600"
          )}>
            <span className="opacity-50">&lt;</span> Опыт и навыки <span className="opacity-50">/&gt;</span>
          </h2>
          <p className={cn(
            "text-lg max-w-2xl mx-auto",
            isDark ? "text-cyan-100/70" : "text-zinc-600"
          )}>
            Ключевые компетенции и технологии, которые я использую в разработке
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group relative",
                "before:absolute before:-inset-0.5 before:blur-sm before:opacity-50",
                isDark 
                  ? "before:bg-gradient-to-br before:from-cyan-500/30 before:via-transparent before:to-purple-500/30" 
                  : "before:bg-gradient-to-br before:from-indigo-200/50 before:via-transparent before:to-blue-200/50"
              )}
            >
              <div className={cn(
                "relative p-6 rounded-lg transition-transform duration-300 will-change-transform hover:-translate-y-2",
                isDark 
                  ? "bg-[#0B1120]/90 border border-cyan-500/20" 
                  : "bg-white/80 border border-slate-200"
              )}>
                {/* Decorative Corner Elements */}
                <div className="absolute -top-px -left-px w-8 h-8 border-t border-l rounded-tl-lg border-current opacity-30" />
                <div className="absolute -top-px -right-px w-8 h-8 border-t border-r rounded-tr-lg border-current opacity-30" />
                <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l rounded-bl-lg border-current opacity-30" />
                <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r rounded-br-lg border-current opacity-30" />

                {/* Top Gradient Line */}
                <div className={cn(
                  "absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r",
                  isDark 
                    ? "from-cyan-500/50 via-transparent to-purple-500/50" 
                    : "from-indigo-400/30 via-transparent to-blue-400/30"
                )} />

                <h3 className={cn(
                  "text-xl font-bold mb-3",
                  isDark ? "text-cyan-400" : "text-indigo-600"
                )}>
                  {skill.title}
                </h3>
                <p className={cn(
                  "mb-4",
                  isDark ? "text-cyan-100/70" : "text-zinc-600"
                )}>
                  {skill.description}
                </p>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 4 }}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded transition-colors",
                        isDark 
                          ? "bg-cyan-500/5 text-cyan-100/70 hover:bg-cyan-500/10" 
                          : "bg-indigo-50/50 text-zinc-600 hover:bg-indigo-50/80"
                      )}
                    >
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full shrink-0",
                        isDark ? "bg-cyan-400" : "bg-indigo-600"
                      )} />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[100px] animate-pulse" />
          <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[100px] animate-pulse delay-700" />
        </div>
      )}
    </Section>
  );
}; 