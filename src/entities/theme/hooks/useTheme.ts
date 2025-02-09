import { useThemeStore } from '../model/theme';

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return {
    theme,
    toggleTheme,
  };
}; 