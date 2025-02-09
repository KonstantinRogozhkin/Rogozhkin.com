import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';

export const Services: FC = () => {
  return (
    <Section id="services">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Услуги
          </h2>
          <p className="text-lg text-default-foreground/60 max-w-3xl mx-auto">
            Помогаю бизнесу автоматизировать процессы и увеличивать продажи с помощью искусственного интеллекта
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Development */}
          <div className="group relative bg-card hover:bg-primary/5 rounded-2xl p-6 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-2xl" />
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">AI Разработка</h3>
              <p className="text-default-foreground/70">
                Разработка интеллектуальных систем с использованием последних достижений в области AI/ML
              </p>
              <ul className="space-y-2 text-default-foreground/60">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Чат-боты на базе GPT
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Системы автоматизации
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  ML-модели для бизнеса
                </li>
              </ul>
            </div>
          </div>

          {/* Consulting */}
          <div className="group relative bg-card hover:bg-primary/5 rounded-2xl p-6 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-2xl" />
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Консалтинг</h3>
              <p className="text-default-foreground/70">
                Помощь в выборе и внедрении оптимальных решений для вашего бизнеса
              </p>
              <ul className="space-y-2 text-default-foreground/60">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Аудит процессов
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Стратегия автоматизации
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Оптимизация затрат
                </li>
              </ul>
            </div>
          </div>

          {/* Integration */}
          <div className="group relative bg-card hover:bg-primary/5 rounded-2xl p-6 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-2xl" />
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Интеграция</h3>
              <p className="text-default-foreground/70">
                Интеграция AI-решений с существующими системами и процессами
              </p>
              <ul className="space-y-2 text-default-foreground/60">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  CRM системы
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Мессенджеры
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  API интеграции
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}; 