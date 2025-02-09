# Протокол развертывания React проекта

Этот документ описывает пошаговый процесс развертывания нового React проекта с использованием современного стека технологий и архитектурных подходов.

## 1. Инициализация проекта

### 1.1. Создание проекта с Vite
```bash
npm create vite@latest my-project -- --template react-ts
cd my-project
```

### 1.2. Установка базовых зависимостей
```bash
npm install
```

## 2. Установка дополнительных зависимостей

### 2.1. Маршрутизация и управление состоянием
```bash
npm install @tanstack/react-query@5.64.1 zustand@5.0.3 react-router-dom@7.1.1
```

### 2.2. Формы и валидация
```bash
npm install @hookform/resolvers zod react-hook-form
```

### 2.3. Стилизация
```bash
npm install -D tailwindcss postcss autoprefixer
```

### 2.4. Инструменты разработки
```bash
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged
```

## 3. Настройка инструментов

### 3.1. Инициализация Tailwind CSS
```bash
npx tailwindcss init -p
```

Создать `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
```

#### Важные замечания по конфигурации Tailwind:

1. **Темизация**:
   - Используется подход с CSS-переменными для гибкой темизации
   - Тёмная тема активируется через класс `dark`
   - Все цвета определены через HSL для лучшего контроля над оттенками

2. **Контейнер**:
   - Центрирование по умолчанию
   - Отступы 2rem
   - Максимальная ширина 1400px для больших экранов

3. **Типографика**:
   - Поддержка системных и кастомных шрифтов
   - Отдельные шрифты для заголовков

4. **Анимации**:
   - Предопределенные анимации для компонентов
   - Плавные переходы

5. **Расширяемость**:
   - Возможность добавления новых цветов и вариаций
   - Кастомные радиусы скругления
   - Гибкая система модификаторов

Подробное руководство по использованию Tailwind CSS доступно в `docs/tailwind-guide.md`.

### 3.2. Настройка ESLint
Создать `.eslintrc.cjs`:
```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
```

### 3.3. Настройка Prettier
Создать `.prettierrc`:
```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "jsxSingleQuote": true,
  "bracketSpacing": true
}
```

### 3.4. Настройка Git Hooks
```bash
git init
npm run prepare
npx husky add .husky/pre-commit "npx lint-staged"
```

Создать `.lintstagedrc`:
```json
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md}": [
    "prettier --write"
  ]
}
```

## 4. Создание структуры проекта

### 4.1. Создание FSD структуры
```bash
mkdir -p src/{app,pages,widgets,features,entities,shared}/{ui,model,api,lib,config}
mkdir -p src/shared/{assets,types,stories}
```

### 4.2. Базовые файлы

#### src/app/App.tsx
```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
```

#### src/app/config/router.tsx
```tsx
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../../pages/home';
import { NotFoundPage } from '../../pages/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
```

## 5. Настройка стилей

### 5.1. Базовые стили
В `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* ... другие переменные ... */
  }
 
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... другие переменные ... */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## 6. Проверка и запуск

### 6.1. Проверка типов и линтинг
```bash
npm run lint
```

### 6.2. Запуск проекта
```bash
npm run dev
```

### 6.3. Сборка для продакшена
```bash
npm run build
npm run preview
```

## 7. Рекомендации по развертыванию

### 7.1. Проверки перед деплоем
- Убедиться, что все зависимости установлены корректно
- Проверить все типы TypeScript
- Запустить линтер и форматтер
- Проверить работу pre-commit хуков
- Собрать проект и проверить сборку локально

### 7.2. CI/CD рекомендации
- Настроить GitHub Actions или другой CI/CD инструмент
- Добавить автоматическую проверку типов и линтинг
- Настроить автоматическую сборку и деплой
- Добавить проверку безопасности зависимостей

### 7.3. Продакшен оптимизации
- Настроить кэширование
- Оптимизировать бандл
- Настроить code splitting
- Добавить Service Worker для PWA
- Настроить мониторинг ошибок (например, Sentry)

## 8. Поддержка и обновление

### 8.1. Регулярные проверки
- Обновление зависимостей
- Проверка безопасности
- Мониторинг производительности
- Анализ логов ошибок

### 8.2. Документация
- Поддерживать README в актуальном состоянии
- Документировать все значительные изменения
- Обновлять протокол развертывания при изменении процесса 