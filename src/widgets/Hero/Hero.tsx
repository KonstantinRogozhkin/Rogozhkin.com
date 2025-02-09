import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';

export const Hero: FC = () => {
  return (
    <Section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Константин Рогожкин
          </h1>
          <p className="text-xl md:text-2xl text-default-foreground/60">
            Специалист в области искусственного интеллекта и больших данных
          </p>
        </div>

        <div className="text-lg space-y-4 max-w-3xl">
          <p>
            Более 10 лет специализируюсь на разработке решений в области ИИ и Big Data. 
            Создал чат-бот для AISales с использованием NLP и машинного обучения для автоматизации продаж и поддержки клиентов.
          </p>
          <p>
            Разработал систему прогнозирования спроса с использованием анализа временных рядов для оптимизации складских запасов интернет-магазина.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Связаться
          </a>
          <a 
            href="#portfolio" 
            className="px-6 py-3 border border-default-foreground/20 rounded-lg hover:bg-default transition-colors"
          >
            Портфолио
          </a>
        </div>
      </div>
    </Section>
  );
}; 