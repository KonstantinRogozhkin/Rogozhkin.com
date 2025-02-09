import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-default">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-default-foreground">
          Страница не найдена
        </h2>
        <p className="text-default-foreground/60">
          Возможно, она была удалена или перемещена
        </p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
} 