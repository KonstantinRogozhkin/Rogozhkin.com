import { FC } from 'react';
import { useMobileMenuStore } from './model';
import { useLocale } from '@/entities/locale';
import { LocaleSwitcher } from '@/features/locale-switcher';

export const MobileMenu: FC = () => {
  const { isOpen, toggle } = useMobileMenuStore();
  const { t } = useLocale();

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggle}
        className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
        aria-label={t(isOpen ? 'menu.toggle.close' : 'menu.toggle.open')}
      >
        <span className="sr-only">{t(isOpen ? 'menu.toggle.close' : 'menu.toggle.open')}</span>
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed inset-0 z-50 md:hidden
          ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        {/* Backdrop with blur */}
        <div
          className={`
            fixed inset-0 bg-default/90 backdrop-blur-md
            transition-opacity duration-300 ease-in-out
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={toggle}
          aria-hidden="true"
        />

        {/* Menu Content */}
        <nav
          className={`
            fixed right-0 top-0 bottom-0 w-3/4 max-w-sm
            bg-card/95 backdrop-blur-sm
            border-l border-card/20 shadow-xl
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="p-6 space-y-8 bg-card">
            {/* Language Switcher */}
            <div className="flex justify-end">
              <LocaleSwitcher />
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <a
                href="#experience"
                onClick={toggle}
                className="block py-2 text-lg hover:text-primary transition-colors"
              >
                {t('menu.experience')}
              </a>
              <a
                href="#portfolio"
                onClick={toggle}
                className="block py-2 text-lg hover:text-primary transition-colors"
              >
                {t('menu.portfolio')}
              </a>
              <a
                href="#services"
                onClick={toggle}
                className="block py-2 text-lg hover:text-primary transition-colors"
              >
                {t('menu.services')}
              </a>
              <a
                href="#blog"
                onClick={toggle}
                className="block py-2 text-lg hover:text-primary transition-colors"
              >
                {t('menu.blog')}
              </a>
              <a
                href="#contact"
                onClick={toggle}
                className="block py-2 text-lg hover:text-primary transition-colors"
              >
                {t('menu.contact')}
              </a>
            </div>

            {/* Contact Button */}
            <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              {t('hero.buttons.contact')}
            </button>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="text-sm font-medium text-default-foreground/60">
                {t('menu.social')}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://t.me/konstik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.325.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <span>Telegram</span>
                </a>

                <a
                  href="https://x.com/exploit_3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>X (Twitter)</span>
                </a>

                <a
                  href="https://github.com/rogozhkin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/konstantinrogozhkin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}; 