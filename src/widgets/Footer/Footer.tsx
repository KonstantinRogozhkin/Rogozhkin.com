import { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';

const navItems = [
  { href: '#experience', label: 'Опыт' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#services', label: 'Услуги' },
  { href: '#blog', label: 'Блог' },
  { href: '#contact', label: 'Контакты' }
];

const socialLinks = [
  { 
    href: 'https://github.com/KonstantinRogozhkin', 
    label: 'GitHub',
    icon: (
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    )
  },
  { 
    href: 'https://linkedin.com/in/KonstantinRogozhkin', 
    label: 'LinkedIn',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    )
  },
  { 
    href: 'https://t.me/konstik', 
    label: 'Telegram',
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
    )
  }
];

export const Footer: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={cn(
      "mt-auto transition-colors duration-300 relative overflow-hidden",
      isDark 
        ? "bg-[#0B1120]/50 border-t border-cyan-500/10" 
        : "bg-white/30 border-t border-slate-200/50 backdrop-blur-sm"
    )}>
      {/* Decorative Elements - moved to top and added z-index: -1 */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className={cn(
          "absolute inset-0 opacity-5",
          isDark ? "bg-[url('/grid.svg')]" : "bg-[url('/grid-light.svg')]"
        )} />
      </div>

      {isDark && (
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[100px] animate-pulse" />
          <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[100px] animate-pulse delay-700" />
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div
              className={cn(
                "text-xl font-bold relative inline-block transition-transform duration-200 hover:scale-[1.02]",
                isDark 
                  ? "text-cyan-400 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:blur-lg after:bg-cyan-500/30 after:opacity-0 hover:after:opacity-100 after:transition-opacity"
                  : "bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
              )}
            >
              KR
            </div>
            <div className="space-y-4">
              <p className={cn(
                "text-sm max-w-md",
                isDark ? "text-cyan-100/60" : "text-zinc-600"
              )}>
                Разработка интеллектуальных систем и решений в области AI. 
                Автоматизация бизнес-процессов с использованием машинного обучения.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-8 h-8 flex items-center justify-center rounded relative group overflow-hidden transition-transform duration-200 hover:scale-[1.05]",
                      "before:absolute before:inset-0 before:opacity-20 before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:translate-x-[-100%]",
                      "hover:before:animate-[shimmer_1s_ease-in-out]",
                      isDark 
                        ? "bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 border border-cyan-500/20" 
                        : "bg-indigo-50 text-indigo-600 hover:text-indigo-500 border border-indigo-200"
                    )}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      {link.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className={cn(
              "text-lg font-semibold",
              isDark ? "text-cyan-400" : "text-indigo-600"
            )}>
              Навигация
            </h3>
            <nav className="grid grid-cols-2 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm transition-all duration-200 flex items-center gap-2 relative hover:translate-x-1",
                    isDark 
                      ? "text-cyan-100/60 hover:text-cyan-400" 
                      : "text-zinc-600 hover:text-indigo-600"
                  )}
                >
                  <span className={cn(
                    "w-1 h-1 rounded-full",
                    isDark ? "bg-cyan-400" : "bg-indigo-600"
                  )} />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className={cn(
              "text-lg font-semibold",
              isDark ? "text-cyan-400" : "text-indigo-600"
            )}>
              Контакты
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:k.rogozhkin@gmail.com"
                className={cn(
                  "text-sm flex items-center gap-3 group",
                  isDark 
                    ? "text-cyan-100/60 hover:text-cyan-400" 
                    : "text-zinc-600 hover:text-indigo-600"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded flex items-center justify-center shrink-0 transition-colors",
                  isDark 
                    ? "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20" 
                    : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100"
                )}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                k.rogozhkin@gmail.com
              </a>
              <a 
                href="https://www.google.com/maps/place/Mar+del+Plata,+Buenos+Aires,+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-sm flex items-center gap-3 group",
                  isDark 
                    ? "text-cyan-100/60 hover:text-cyan-400" 
                    : "text-zinc-600 hover:text-indigo-600"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded flex items-center justify-center shrink-0",
                  isDark 
                    ? "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20" 
                    : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100"
                )}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                Mar del Plata, Argentina
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={cn(
          "text-center text-sm mt-12 pt-8",
          isDark 
            ? "text-cyan-400/60 border-t border-cyan-500/10" 
            : "text-zinc-500 border-t border-slate-200/50"
        )}>
          © {new Date().getFullYear()} Konstantin Rogozhkin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}; 