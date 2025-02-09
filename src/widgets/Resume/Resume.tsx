import { FC } from 'react';
import { Section } from '@/shared/ui/Section/Section';

export const Resume: FC = () => {
  return (
    <Section id="resume" className="bg-card">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Резюме
          </h2>
          <p className="text-lg text-default-foreground/60 max-w-3xl mx-auto">
            Специалист в области искусственного интеллекта и больших данных
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Опыт работы</h3>
          
          <div className="space-y-8">
            {/* NEiRA AI */}
            <div className="bg-default rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold">NEiRA AI</h4>
                  <div className="text-primary">Founder</div>
                </div>
                <div className="text-sm text-default-foreground/60">
                  Январь 2024 - Настоящее время
                </div>
              </div>
              <p className="text-default-foreground/80">
                Разработка систем искусственного интеллекта и чат-ботов для автоматизации бизнес-процессов
              </p>
            </div>

            {/* AISales */}
            <div className="bg-default rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold">AISales</h4>
                  <div className="text-primary">Chief Technology Officer</div>
                </div>
                <div className="text-sm text-default-foreground/60">
                  Август 2017 - Февраль 2022
                </div>
              </div>
              <p className="text-default-foreground/80">
                Разработка чат-ботов с использованием NLP и машинного обучения для автоматизации продаж и поддержки клиентов. Создание системы прогнозирования спроса с использованием анализа временных рядов.
              </p>
            </div>

            {/* CallProfit */}
            <div className="bg-default rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold">CallProfit</h4>
                  <div className="text-primary">Директор по ИТ</div>
                </div>
                <div className="text-sm text-default-foreground/60">
                  Январь 2015 - 2017
                </div>
              </div>
              <ul className="list-disc list-inside text-default-foreground/80 space-y-2">
                <li>Создание и внедрение веб-сайта</li>
                <li>Внедрение Bitrix24 CRM</li>
                <li>Автоматизация бизнес-процессов</li>
                <li>Интеграция CRM колл-центра с внешними системами</li>
                <li>Разработка модулей для системы Oktell</li>
                <li>Визуализация отчетов (Google DataStudio)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Образование</h3>
          
          <div className="bg-default rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-bold">Вятский Государственный Гуманитарный Университет</h4>
                <div className="text-primary">Информатик-экономист</div>
              </div>
              <div className="text-sm text-default-foreground/60">
                2007 - 2012
              </div>
            </div>
            <p className="text-default-foreground/80">
              Специальность «Прикладная информатика (в экономике)»
            </p>
          </div>
        </div>

        {/* Key Skills */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Ключевые навыки</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-default rounded-2xl p-6 space-y-2">
              <div className="text-xl font-bold text-primary">AI & ML</div>
              <ul className="list-disc list-inside text-default-foreground/80 space-y-1">
                <li>Рекомендательные системы</li>
                <li>Чат-боты</li>
                <li>Прогнозирование спроса</li>
                <li>Генерация текста</li>
              </ul>
            </div>

            <div className="bg-default rounded-2xl p-6 space-y-2">
              <div className="text-xl font-bold text-primary">Управление</div>
              <ul className="list-disc list-inside text-default-foreground/80 space-y-1">
                <li>Управление ИТ-инфраструктурой</li>
                <li>Осуществление проектов</li>
                <li>Сетевое администрирование</li>
                <li>Управление командой</li>
              </ul>
            </div>

            <div className="bg-default rounded-2xl p-6 space-y-2">
              <div className="text-xl font-bold text-primary">Технологии</div>
              <ul className="list-disc list-inside text-default-foreground/80 space-y-1">
                <li>Python</li>
                <li>NLP</li>
                <li>Big Data</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}; 