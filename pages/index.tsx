import type { NextPage } from 'next';
import Head from 'next/head';
import Contact from '../src/components/Contact/Contact';
import Hero from '../src/components/Hero/Hero';
import NavBar from '../src/components/NavBar/NavBar';
import Offer from '../src/components/Offer/Offer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Laboratorium protetyczne | ASGOLAB</title>
        <meta
          name='description'
          content='Laboratorium protetyczne specjalizujące się w usługach zakresu nowoczesnej techniki dentystyczne CAD/CAM, znajdujące się w centrum Tychów. | ASGOLAB'
        />
        <link rel='icon' href='/ASGOLAB_favicon.svg' />
      </Head>
      <NavBar />
      <main>
        <Hero />
        <Offer />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
