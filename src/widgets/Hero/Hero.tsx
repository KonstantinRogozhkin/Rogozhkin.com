import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';

export const Hero: FC = () => {
  return (
    <Section 
      className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden bg-gradient-to-b from-default to-card"
      fullWidth
    >
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Konstantin Rogozhkin
              <span className="block text-primary">AI & Automation Expert</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-default-foreground/80">
              Создаю интеллектуальные системы автоматизации продаж и коммуникаций с клиентами
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Связаться
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                Портфолио
              </button>
            </div>
          </div>

          {/* Image/Animation placeholder */}
          <div className="relative aspect-square lg:aspect-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full animate-pulse" />
            <div className="absolute inset-4 bg-gradient-to-bl from-primary/30 to-secondary/30 rounded-full animate-pulse [animation-delay:1s]" />
            <div className="absolute inset-8 bg-gradient-to-tl from-primary/40 to-secondary/40 rounded-full animate-pulse [animation-delay:2s]" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl" />
      </div>
    </Section>
  );
}; 