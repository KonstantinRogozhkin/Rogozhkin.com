import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';

export const Experience: FC = () => {
  return (
    <Section id="experience" className="bg-card">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Опыт в AI и Автоматизации
          </h2>
          <p className="text-lg text-default-foreground/60 max-w-3xl mx-auto">
            Более 5 лет опыта в разработке интеллектуальных систем автоматизации продаж и коммуникаций
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

          {/* Timeline items */}
          <div className="space-y-16">
            {/* AiSales */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-4 h-4 rounded-full bg-primary" />
              </div>
              <div className="bg-default rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
                <div className="text-primary font-semibold mb-2">2019 - Настоящее время</div>
                <h3 className="text-xl font-bold mb-2">Основатель и CTO в AiSales</h3>
                <p className="text-default-foreground/80 mb-4">
                  Разработка платформы автоматизации продаж с использованием искусственного интеллекта
                </p>
                <ul className="space-y-2 text-default-foreground/70">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Увеличение конверсии чатов в продажи с 12% до 34%
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Рост среднего чека на 18% за счет интеллектуальных допродаж
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Сокращение времени на рутинные операции на 65%
                  </li>
                </ul>
              </div>
            </div>

            {/* Previous Experience */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-4 h-4 rounded-full bg-primary/80" />
              </div>
              <div className="bg-default rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
                <div className="text-primary font-semibold mb-2">2015 - 2019</div>
                <h3 className="text-xl font-bold mb-2">Senior Software Engineer</h3>
                <p className="text-default-foreground/80 mb-4">
                  Разработка enterprise-решений для автоматизации бизнес-процессов
                </p>
                <ul className="space-y-2 text-default-foreground/70">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Внедрение ML-моделей для предиктивной аналитики
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Оптимизация процессов обработки данных
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Разработка микросервисной архитектуры
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-default rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">AI/ML</div>
            <div className="text-sm text-default-foreground/60">GPT, TensorFlow, PyTorch</div>
          </div>
          <div className="bg-default rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">Backend</div>
            <div className="text-sm text-default-foreground/60">Python, Node.js, Go</div>
          </div>
          <div className="bg-default rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">Frontend</div>
            <div className="text-sm text-default-foreground/60">React, TypeScript, Next.js</div>
          </div>
          <div className="bg-default rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">DevOps</div>
            <div className="text-sm text-default-foreground/60">Docker, K8s, AWS</div>
          </div>
        </div>
      </div>
    </Section>
  );
}; 