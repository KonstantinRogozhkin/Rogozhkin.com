import { FC } from 'react';
import { Hero } from '@/widgets/Hero';
import { Experience } from '@/widgets/Experience';
import { Services } from '@/widgets/Services';
import { Portfolio } from '@/widgets/Portfolio';
import { Resume } from '@/widgets/Resume';
import { TechnicalExpertise } from '@/widgets/TechnicalExpertise';
import { Cases } from '@/widgets/Cases';
import { Contact } from '@/widgets/Contact';
import { Thanks } from '@/widgets/Thanks';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Resume />
      <TechnicalExpertise />
      <Experience />
      <Cases />
      <Portfolio />
      <Services />
      <Contact />
      <Thanks />
    </>
  );
};

export default HomePage; 