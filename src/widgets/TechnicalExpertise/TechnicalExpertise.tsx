import { FC, memo } from 'react';
import { Section } from '@/shared/ui/layouts';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';
import { cn } from '@/shared/lib/utils';
import { motion } from 'framer-motion';

interface ExpertiseItem {
  name: string;
  level?: string;
  years?: string;
  category?: string;
  description: string;
}

const TechnicalExpertiseComponent: FC = () => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === 'dark';

  const languages = t('expertise.categories.languages.items', { returnObjects: true }) as ExpertiseItem[];
  const frameworks = t('expertise.categories.frameworks.items', { returnObjects: true }) as ExpertiseItem[];
  const practices = t('expertise.categories.practices.items', { returnObjects: true }) as ExpertiseItem[];

  return (
    <Section
      id="expertise"
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
          <span className="opacity-50">&lt;</span> {t('expertise.title')} <span className="opacity-50">/&gt;</span>
        </h2>
        <p className={cn(
          "text-lg max-w-3xl mx-auto",
          isDark ? "text-cyan-100/70" : "text-zinc-600"
        )}>
          {t('expertise.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "rounded-lg p-6 border",
            isDark 
              ? "bg-[#0B1120]/90 border-cyan-500/20" 
              : "bg-white/80 border-slate-200"
          )}
        >
          <h3 className={cn(
            "text-xl font-bold mb-4 flex items-center gap-2",
            isDark ? "text-cyan-400" : "text-indigo-600"
          )}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            {t('expertise.categories.languages.title')}
          </h3>
          <div className="space-y-4">
            {languages.map((lang, idx) => (
              <div key={idx} className={cn(
                "p-4 rounded-lg border",
                isDark 
                  ? "bg-cyan-500/5 border-cyan-500/10" 
                  : "bg-indigo-50/50 border-indigo-100"
              )}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className={cn(
                      "font-bold",
                      isDark ? "text-cyan-300" : "text-indigo-700"
                    )}>
                      {lang.name}
                    </h4>
                    {lang.years && (
                      <p className={cn(
                        "text-xs",
                        isDark ? "text-cyan-100/50" : "text-zinc-500"
                      )}>
                        {lang.years}
                      </p>
                    )}
                  </div>
                  {lang.level && (
                    <span className={cn(
                      "px-2 py-1 text-xs rounded font-medium",
                      isDark 
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" 
                        : "bg-indigo-100 text-indigo-700 border border-indigo-200"
                    )}>
                      {lang.level}
                    </span>
                  )}
                </div>
                <p className={cn(
                  "text-sm",
                  isDark ? "text-cyan-100/60" : "text-zinc-600"
                )}>
                  {lang.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks & Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "rounded-lg p-6 border",
            isDark 
              ? "bg-[#0B1120]/90 border-cyan-500/20" 
              : "bg-white/80 border-slate-200"
          )}
        >
          <h3 className={cn(
            "text-xl font-bold mb-4 flex items-center gap-2",
            isDark ? "text-cyan-400" : "text-indigo-600"
          )}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            {t('expertise.categories.frameworks.title')}
          </h3>
          <div className="space-y-4">
            {frameworks.map((fw, idx) => (
              <div key={idx} className={cn(
                "p-4 rounded-lg border",
                isDark 
                  ? "bg-cyan-500/5 border-cyan-500/10" 
                  : "bg-indigo-50/50 border-indigo-100"
              )}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className={cn(
                    "font-bold",
                    isDark ? "text-cyan-300" : "text-indigo-700"
                  )}>
                    {fw.name}
                  </h4>
                  {fw.category && (
                    <span className={cn(
                      "px-2 py-1 text-xs rounded font-medium",
                      isDark 
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" 
                        : "bg-indigo-100 text-indigo-700 border border-indigo-200"
                    )}>
                      {fw.category}
                    </span>
                  )}
                </div>
                <p className={cn(
                  "text-sm",
                  isDark ? "text-cyan-100/60" : "text-zinc-600"
                )}>
                  {fw.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engineering Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "rounded-lg p-6 border",
            isDark 
              ? "bg-[#0B1120]/90 border-cyan-500/20" 
              : "bg-white/80 border-slate-200"
          )}
        >
          <h3 className={cn(
            "text-xl font-bold mb-4 flex items-center gap-2",
            isDark ? "text-cyan-400" : "text-indigo-600"
          )}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t('expertise.categories.practices.title')}
          </h3>
          <div className="space-y-4">
            {practices.map((practice, idx) => (
              <div key={idx} className={cn(
                "p-4 rounded-lg border",
                isDark 
                  ? "bg-cyan-500/5 border-cyan-500/10" 
                  : "bg-indigo-50/50 border-indigo-100"
              )}>
                <h4 className={cn(
                  "font-bold mb-2",
                  isDark ? "text-cyan-300" : "text-indigo-700"
                )}>
                  {practice.name}
                </h4>
                <p className={cn(
                  "text-sm",
                  isDark ? "text-cyan-100/60" : "text-zinc-600"
                )}>
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Key Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={cn(
          "mt-12 p-6 rounded-lg border",
          isDark 
            ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20" 
            : "bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200"
        )}
      >
        <h3 className={cn(
          "text-lg font-bold mb-4 text-center",
          isDark ? "text-cyan-400" : "text-indigo-600"
        )}>
          🎯 Key Highlights for Software Engineer Tutor Role
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className={cn(
              "text-2xl font-bold mb-1",
              isDark ? "text-cyan-400" : "text-indigo-600"
            )}>
              15+ years
            </div>
            <div className={cn(
              "text-sm",
              isDark ? "text-cyan-100/70" : "text-zinc-600"
            )}>
              Production Python expertise
            </div>
          </div>
          <div className="text-center">
            <div className={cn(
              "text-2xl font-bold mb-1",
              isDark ? "text-cyan-400" : "text-indigo-600"
            )}>
              99.9%
            </div>
            <div className={cn(
              "text-sm",
              isDark ? "text-cyan-100/70" : "text-zinc-600"
            )}>
              Uptime with comprehensive testing
            </div>
          </div>
          <div className="text-center">
            <div className={cn(
              "text-2xl font-bold mb-1",
              isDark ? "text-cyan-400" : "text-indigo-600"
            )}>
              1M+ users
            </div>
            <div className={cn(
              "text-sm",
              isDark ? "text-cyan-100/70" : "text-zinc-600"
            )}>
              Scalable systems built
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export const TechnicalExpertise = memo(TechnicalExpertiseComponent);
