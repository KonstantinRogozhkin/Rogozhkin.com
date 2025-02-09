import { FC } from 'react';
import { Hero } from '@/widgets/Hero';
import { Experience } from '@/widgets/Experience';
import { Services } from '@/widgets/Services';
import { Portfolio } from '@/widgets/Portfolio';
import { Resume } from '@/widgets/Resume';
import { Contact } from '@/widgets/Contact';
import { Thanks } from '@/widgets/Thanks';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Resume />
      <Experience />
      <Portfolio />
      <Services />
      <Contact />
      <Thanks />
    </>
  );
};

export default HomePage; 