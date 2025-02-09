# Руководство по использованию Tailwind CSS

## Основные принципы

### 1. Цветовая схема и темизация

Проект использует CSS-переменные для определения цветов, что позволяет легко переключаться между светлой и темной темами.

#### Использование цветов:
```tsx
// Правильно
<div className="bg-background text-foreground">
<button className="bg-primary text-primary-foreground">
<div className="bg-muted text-muted-foreground">

// Неправильно
<div className="bg-white text-black">
<div className="bg-[#000000]">
```

### 2. Контейнер и отступы

Используйте встроенный контейнер для консистентных отступов:

```tsx
// Правильно
<div className="container">
  <main className="px-4 py-8">

// Неправильно
<div className="max-w-7xl mx-auto">
<div style={{ maxWidth: '1400px' }}>
```

### 3. Типографика

Используйте предопределенные шрифты:

```tsx
// Правильно
<h1 className="font-heading">
<p className="font-sans">

// Неправильно
<h1 style={{ fontFamily: 'Arial' }}>
```

### 4. Радиусы скругления

Используйте переменные для радиусов:

```tsx
// Правильно
<div className="rounded-lg">
<button className="rounded-md">

// Неправильно
<div className="rounded-[8px]">
```

## Темизация

### 1. Переключение темы

Темная тема активируется через класс `dark` на `html` элементе:

```tsx
// ThemeProvider.tsx
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return children;
};
```

### 2. CSS-переменные

Все цвета определены через CSS-переменные в `index.css`:

```css
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
```

## Лучшие практики

### 1. Компоненты

- Используйте композицию классов для повторяющихся стилей
- Создавайте переиспользуемые компоненты в `shared/ui`
- Используйте модификаторы для вариаций

```tsx
// Правильно
const Button = ({ variant = 'primary', size = 'md' }) => {
  const baseStyles = 'rounded-md font-medium transition-colors';
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
};
```

### 2. Отзывчивый дизайн

Используйте встроенные брейкпоинты:

```tsx
// Правильно
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Неправильно
<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
```

### 3. Состояния

Используйте модификаторы состояний:

```tsx
// Правильно
<button className="hover:bg-primary/90 focus:ring-2 active:translate-y-0.5">

// Неправильно
<button onMouseOver={() => /* ... */} style={{ /* ... */ }}>
```

### 4. Анимации

Используйте предопределенные анимации:

```tsx
// Правильно
<div className="animate-accordion-down">

// Неправильно
<div style={{ animation: 'slideDown 0.2s' }}>
```

## Производительность

### 1. Очистка неиспользуемых стилей

Tailwind автоматически удаляет неиспользуемые стили в продакшен-сборке. Убедитесь, что все файлы с компонентами включены в `content` конфигурации.

### 2. Динамические классы

При использовании динамических классов, убедитесь, что они включены в `content`:

```tsx
// Правильно
const variants = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
};

// Неправильно
const className = `bg-${color}-500`; // Может не работать в продакшене
```

## Инструменты разработки

### 1. VS Code расширения

- Tailwind CSS IntelliSense
- Headwind (для сортировки классов)

### 2. Инспекция классов

Используйте React Developer Tools и встроенные инструменты браузера для инспекции применяемых стилей. 