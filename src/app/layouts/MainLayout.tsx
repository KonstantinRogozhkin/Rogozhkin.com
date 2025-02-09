import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className='min-h-screen bg-background'>
      <main className='container mx-auto px-4 py-8'>
        <Outlet />
      </main>
    </div>
  );
}; 