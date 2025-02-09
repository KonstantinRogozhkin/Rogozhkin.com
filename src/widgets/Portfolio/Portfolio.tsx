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
            Реализованные проекты в области AI и автоматизации бизнес-процессов
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* AiSales Platform */}
          <div className="group relative bg-default rounded-2xl overflow-hidden">
            <div className="aspect-video bg-primary/10">
              {/* Project preview image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-primary">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">AiSales Platform</h3>
              <p className="text-default-foreground/70">
                Платформа автоматизации продаж с использованием AI для анализа поведения клиентов и автоматизации коммуникаций
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AI/ML</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Демо
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* AI Chat Bot */}
          <div className="group relative bg-default rounded-2xl overflow-hidden">
            <div className="aspect-video bg-primary/10">
              {/* Project preview image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-primary">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">AI Chat Bot</h3>
              <p className="text-default-foreground/70">
                Интеллектуальный чат-бот на базе GPT для автоматизации поддержки клиентов и генерации лидов
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">GPT</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TailwindCSS</span>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Демо
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="bg-default rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-default-foreground/60">Проектов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-default-foreground/60">Коммитов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-default-foreground/60">Open Source</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-default-foreground/60">Звёзд</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}; 