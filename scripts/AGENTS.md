# scripts

## dev/verify-build.sh

Проверка сборки фронтенда с записью лога в `./.neira/logs/runs/[YYYY-MM-DD]/[HHMM]/verify-build.log`.

## dev/generate-resume.html

HTML шаблон для генерации PDF резюме (v1). Содержит современный дизайн с градиентным сайдбаром, профессиональным контентом и адаптивной версткой для печати.

## dev/generate-resume-v2.html

Обновленный HTML шаблон резюме с реальными данными: фото, метриками ($77K revenue, 1M+ users), техническим стеком (Node.js, Dialogflow, Corezoid), QR-кодом LinkedIn и ссылками на GitHub.

## dev/generate-qr-code.js

Скрипт для генерации QR-кода LinkedIn профиля. Создает `public/linkedin-qr.png` с логированием в `./.neira/logs/runs/[YYYY-MM-DD]/[HHMM]/generate-qr-code.log`.

**Запуск:**
```bash
node scripts/dev/generate-qr-code.js
```

## dev/generate-resume-pdf.js

Скрипт для генерации PDF резюме из HTML шаблона (v2) с использованием Puppeteer. Создает файл `public/resume.pdf` с логированием в `./.neira/logs/runs/[YYYY-MM-DD]/[HHMM]/generate-resume-pdf.log`.

**Запуск:**
```bash
yarn generate:resume
# или
node scripts/dev/generate-resume-pdf.js
```

## dev/generate-resume-xai.html

HTML шаблон для генерации PDF резюме специально под позицию xAI Software Engineer Tutor. Содержит акцент на code quality, testing frameworks, debugging, performance optimization и AI code curation. Включает секцию Technical Expertise с deep expertise в Python, FastAPI, pytest.

## dev/generate-resume-xai-pdf.js

Скрипт для генерации англоязычного PDF резюме для xAI Software Engineer Tutor из HTML шаблона с использованием Puppeteer. Создает файл `public/resume.pdf` с акцентом на требования позиции.

**Запуск:**
```bash
yarn generate:resume:xai
# или
node scripts/dev/generate-resume-xai-pdf.js
```

## dev/generate-resume-xai-ru.html

HTML шаблон для генерации русскоязычного PDF резюме специально под позицию xAI Software Engineer Tutor. Полный перевод с акцентом на code quality, testing frameworks, debugging, performance optimization и AI code curation.

## dev/generate-resume-xai-ru-pdf.js

Скрипт для генерации русскоязычного PDF резюме для xAI Software Engineer Tutor. Создает файл `public/resume-ru.pdf`.

**Запуск:**
```bash
yarn generate:resume:xai:ru
# или
node scripts/dev/generate-resume-xai-ru-pdf.js
```

**Генерация обеих версий:**
```bash
yarn generate:resume:xai:all
```

## dev/generate-xai-cover-letter.html

HTML шаблон для генерации PDF cover letter для вакансии xAI Software Engineer Tutor. Содержит профессиональный дизайн с акцентом на code quality, testing, performance optimization и AI/ML expertise.

## dev/generate-xai-cover-letter-pdf.js

Скрипт для генерации PDF cover letter для xAI из HTML шаблона с использованием Puppeteer. Создает файл `public/xai-cover-letter.pdf`.

**Запуск:**
```bash
yarn generate:xai-cover
# или
node scripts/dev/generate-xai-cover-letter-pdf.js
```
