import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';

export const Portfolio: FC = () => {
  return (
    <Section id="portfolio" className="bg-card">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Портфолио
          </h2>
          <p className="text-lg text-default-foreground/60 max-w-3xl mx-auto">
            Мои последние проекты в области искусственного интеллекта и автоматизации
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* NEiRA AI */}
          <div className="group bg-default rounded-2xl overflow-hidden transition-transform hover:-translate-y-1">
            <div className="aspect-video bg-primary/5 flex items-center justify-center">
              <svg className="w-16 h-16 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">NEiRA AI</h3>
              <p className="text-default-foreground/80">
                Платформа для создания и управления чат-ботами с использованием искусственного интеллекта
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">NLP</span>
              </div>
            </div>
          </div>

          {/* AISales Bot */}
          <div className="group bg-default rounded-2xl overflow-hidden transition-transform hover:-translate-y-1">
            <div className="aspect-video bg-primary/5 flex items-center justify-center">
              <svg className="w-16 h-16 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">AISales Bot</h3>
              <p className="text-default-foreground/80">
                Чат-бот для автоматизации продаж и поддержки клиентов с более чем 2 миллионами уникальных пользователей
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ML</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">NLP</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Automation</span>
              </div>
            </div>
          </div>

          {/* Demand Forecasting */}
          <div className="group bg-default rounded-2xl overflow-hidden transition-transform hover:-translate-y-1">
            <div className="aspect-video bg-primary/5 flex items-center justify-center">
              <svg className="w-16 h-16 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Прогнозирование спроса</h3>
              <p className="text-default-foreground/80">
                Система прогнозирования спроса для оптимизации складских запасов интернет-магазина
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Big Data</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Analytics</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="text-center">
          <a 
            href="https://github.com/rogozhkin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-default hover:bg-default/80 transition-colors rounded-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Посмотреть больше проектов на GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}; 