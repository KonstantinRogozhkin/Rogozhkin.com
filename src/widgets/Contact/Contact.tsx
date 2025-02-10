import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';
import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';
import { useLocale } from '@/entities/locale';

export const Contact: FC = () => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === 'dark';

  return (
    <Section id="contact" className="relative overflow-hidden">
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
            <span className="opacity-50">&lt;</span> {t('contact.title')} <span className="opacity-50">/&gt;</span>
          </h2>
          <p className={cn(
            "text-lg max-w-3xl mx-auto",
            isDark ? "text-cyan-100/60" : "text-zinc-600"
          )}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className={cn(
              "p-8 rounded-lg relative",
              "before:absolute before:-inset-0.5 before:blur-sm before:opacity-50",
              isDark 
                ? "bg-[#0B1120]/90 border border-cyan-500/20 before:bg-gradient-to-br before:from-cyan-500/30 before:via-transparent before:to-purple-500/30" 
                : "bg-white/80 border border-slate-200 before:bg-gradient-to-br before:from-indigo-200/50 before:via-transparent before:to-blue-200/50"
            )}>
              {/* Decorative Corner Elements */}
              <div className="absolute -top-px -left-px w-8 h-8 border-t border-l rounded-tl-lg border-current opacity-30" />
              <div className="absolute -top-px -right-px w-8 h-8 border-t border-r rounded-tr-lg border-current opacity-30" />
              <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l rounded-bl-lg border-current opacity-30" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r rounded-br-lg border-current opacity-30" />

              <div className="relative space-y-8">
                <div className="space-y-6">
                  <h3 className={cn(
                    "text-xl font-bold",
                    isDark ? "text-cyan-400" : "text-indigo-600"
                  )}>
                    {t('contact.info.title')}
                  </h3>
                  
                  <div className="space-y-4">
                    <motion.div 
                      whileHover={{ x: 4 }}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-lg",
                        isDark 
                          ? "bg-cyan-500/5 border border-cyan-500/20" 
                          : "bg-indigo-50/50 border border-indigo-200/50"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 flex items-center justify-center rounded-lg",
                        isDark ? "bg-cyan-500/10 text-cyan-400" : "bg-indigo-100 text-indigo-600"
                      )}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className={cn(
                          "font-medium",
                          isDark ? "text-cyan-100" : "text-zinc-700"
                        )}>{t('contact.info.email.label')}</div>
                        <a 
                          href="mailto:konstantin@rogozhkin.com" 
                          className={cn(
                            "inline-flex items-center gap-1 transition-colors",
                            isDark ? "text-cyan-400 hover:text-cyan-300" : "text-indigo-600 hover:text-indigo-500"
                          )}
                        >
                          {t('contact.info.email.value')}
                          <span className="text-xs opacity-50">↗</span>
                        </a>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: 4 }}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-lg",
                        isDark 
                          ? "bg-cyan-500/5 border border-cyan-500/20" 
                          : "bg-indigo-50/50 border border-indigo-200/50"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 flex items-center justify-center rounded-lg",
                        isDark ? "bg-cyan-500/10 text-cyan-400" : "bg-indigo-100 text-indigo-600"
                      )}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className={cn(
                          "font-medium",
                          isDark ? "text-cyan-100" : "text-zinc-700"
                        )}>{t('contact.info.location.label')}</div>
                        <div className={cn(
                          isDark ? "text-cyan-100/60" : "text-zinc-600"
                        )}>{t('contact.info.location.value')}</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-6">
                  <h3 className={cn(
                    "text-xl font-bold",
                    isDark ? "text-cyan-400" : "text-indigo-600"
                  )}>
                    {t('contact.social.title')}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.a 
                      href="https://t.me/konstik" 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-lg relative group overflow-hidden",
                        "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                        "hover:before:animate-[shimmer_1s_ease-in-out]",
                        isDark 
                          ? "bg-cyan-500/5 border border-cyan-500/20 text-cyan-400" 
                          : "bg-indigo-50/50 border border-indigo-200/50 text-indigo-600"
                      )}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                      </svg>
                      <span>{t('contact.social.telegram')}</span>
                      <span className="text-xs opacity-50 ml-auto">↗</span>
                    </motion.a>
                    
                    <motion.a 
                      href="https://x.com/exploit_3" 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-lg relative group overflow-hidden",
                        "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                        "hover:before:animate-[shimmer_1s_ease-in-out]",
                        isDark 
                          ? "bg-cyan-500/5 border border-cyan-500/20 text-cyan-400" 
                          : "bg-indigo-50/50 border border-indigo-200/50 text-indigo-600"
                      )}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      <span>{t('contact.social.twitter')}</span>
                      <span className="text-xs opacity-50 ml-auto">↗</span>
                    </motion.a>

                    <motion.a 
                      href="https://github.com/KonstantinRogozhkin" 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-lg relative group overflow-hidden",
                        "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                        "hover:before:animate-[shimmer_1s_ease-in-out]",
                        isDark 
                          ? "bg-cyan-500/5 border border-cyan-500/20 text-cyan-400" 
                          : "bg-indigo-50/50 border border-indigo-200/50 text-indigo-600"
                      )}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>{t('contact.social.github')}</span>
                      <span className="text-xs opacity-50 ml-auto">↗</span>
                    </motion.a>

                    <motion.a 
                      href="https://www.linkedin.com/in/konstantinrogozhkin" 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-lg relative group overflow-hidden",
                        "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                        "hover:before:animate-[shimmer_1s_ease-in-out]",
                        isDark 
                          ? "bg-cyan-500/5 border border-cyan-500/20 text-cyan-400" 
                          : "bg-indigo-50/50 border border-indigo-200/50 text-indigo-600"
                      )}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>{t('contact.social.linkedin')}</span>
                      <span className="text-xs opacity-50 ml-auto">↗</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={cn(
            "relative",
            "before:absolute before:-inset-0.5 before:blur-sm before:opacity-50",
            isDark 
              ? "before:bg-gradient-to-br before:from-cyan-500/30 before:via-transparent before:to-purple-500/30" 
              : "before:bg-gradient-to-br before:from-indigo-200/50 before:via-transparent before:to-blue-200/50"
          )}>
            <div className={cn(
              "relative p-8 rounded-lg",
              isDark 
                ? "bg-[#0B1120]/90 border border-cyan-500/20" 
                : "bg-white/80 border border-slate-200"
            )}>
              {/* Decorative Corner Elements */}
              <div className="absolute -top-px -left-px w-8 h-8 border-t border-l rounded-tl-lg border-current opacity-30" />
              <div className="absolute -top-px -right-px w-8 h-8 border-t border-r rounded-tr-lg border-current opacity-30" />
              <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l rounded-bl-lg border-current opacity-30" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r rounded-br-lg border-current opacity-30" />
              <h3 className={cn(
                    "text-xl font-bold mb-5",
                    isDark ? "text-cyan-400" : "text-indigo-600"
                  )}>
                    {t('contact.form.title')}
                  </h3>
              <form className="space-y-6 relative">
                <div className="space-y-4">
                  <label className="block">
                    <span className={cn(
                      "text-sm font-medium",
                      isDark ? "text-cyan-100" : "text-zinc-700"
                    )}>{t('contact.form.name.label')}</span>
                    <input 
                      type="text"
                      className={cn(
                        "mt-1 block w-full rounded-lg px-4 py-2 bg-transparent",
                        "transition-colors duration-200",
                        isDark 
                          ? "border border-cyan-500/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-cyan-100" 
                          : "border border-indigo-200/50 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-zinc-700"
                      )}
                      placeholder={t('contact.form.name.placeholder')}
                    />
                  </label>

                  <label className="block">
                    <span className={cn(
                      "text-sm font-medium",
                      isDark ? "text-cyan-100" : "text-zinc-700"
                    )}>{t('contact.form.email.label')}</span>
                    <input 
                      type="email"
                      className={cn(
                        "mt-1 block w-full rounded-lg px-4 py-2 bg-transparent",
                        "transition-colors duration-200",
                        isDark 
                          ? "border border-cyan-500/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-cyan-100" 
                          : "border border-indigo-200/50 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-zinc-700"
                      )}
                      placeholder={t('contact.form.email.placeholder')}
                    />
                  </label>

                  <label className="block">
                    <span className={cn(
                      "text-sm font-medium",
                      isDark ? "text-cyan-100" : "text-zinc-700"
                    )}>{t('contact.form.message.label')}</span>
                    <textarea 
                      className={cn(
                        "mt-1 block w-full rounded-lg px-4 py-2 bg-transparent",
                        "transition-colors duration-200",
                        isDark 
                          ? "border border-cyan-500/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-cyan-100" 
                          : "border border-indigo-200/50 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-zinc-700"
                      )}
                      rows={4}
                      placeholder={t('contact.form.message.placeholder')}
                    ></textarea>
                  </label>
                </div>

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full px-6 py-3 rounded-lg font-medium relative group overflow-hidden",
                    "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:translate-x-[-100%]",
                    "hover:before:animate-[shimmer_1s_ease-in-out]",
                    isDark 
                      ? "bg-cyan-500 text-cyan-50 hover:bg-cyan-400 transition-colors" 
                      : "bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                  )}
                >
                  {t('contact.form.submit')}
                </motion.button>
              </form>
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
    </Section>
  );
}; 