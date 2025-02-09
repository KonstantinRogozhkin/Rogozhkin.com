import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-4'>
      <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
      <p className='text-lg text-muted-foreground'>
        The page you are looking for does not exist.
      </p>
      <Link
        to='/'
        className='text-primary hover:text-primary/80 underline underline-offset-4'
      >
        Go back home
      </Link>
    </div>
  );
}; 