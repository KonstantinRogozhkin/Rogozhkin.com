import { FC } from 'react';
import { Hero } from '@/widgets/Hero';
import { Experience } from '@/widgets/Experience';
import { Services } from '@/widgets/Services';
import { Portfolio } from '@/widgets/Portfolio';
import { Resume } from '@/widgets/Resume';
import { Contact } from '@/widgets/Contact';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Resume />
      <Experience />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
};

export default HomePage; 