import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { useTheme } from '@/entities/theme';
import { Container } from '@/shared/ui/layouts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function ErrorFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-default">
      <Container className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-destructive">Что-то пошло не так</h2>
        <p className="text-default-foreground/60">
          Пожалуйста, обновите страницу или попробуйте позже
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Обновить страницу
        </button>
      </Container>
    </div>
  );
}

function AppContent() {
  const { theme } = useTheme();

  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-default">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App; 