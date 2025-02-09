import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Функция для установки темы в DOM
const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  // Также добавим класс для Tailwind
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Определяем начальную тему
const getInitialTheme = (): Theme => {
  // Проверяем сохраненную тему
  const savedTheme = localStorage.getItem('theme-storage');
  if (savedTheme) {
    try {
      const parsed = JSON.parse(savedTheme);
      if (parsed.state && (parsed.state.theme === 'light' || parsed.state.theme === 'dark')) {
        return parsed.state.theme;
      }
    } catch (e) {
      console.error('Error parsing saved theme:', e);
    }
  }
  
  // Если нет сохраненной темы, возвращаем темную тему по умолчанию
  return 'dark';
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: getInitialTheme(),
      setTheme: (newTheme: Theme) => {
        applyTheme(newTheme);
        set({ theme: newTheme });
      },
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          applyTheme(newTheme);
          return { theme: newTheme };
        }),
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: (state) => {
        // После восстановления состояния из хранилища применяем тему
        if (state) {
          applyTheme(state.theme);
        }
      },
    }
  )
); 