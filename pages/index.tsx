import type { NextPage } from 'next';
import Head from 'next/head';
import Contact from '../src/components/Contact/Contact';
import Footer from '../src/components/Footer/Footer';
import Hero from '../src/components/Hero/Hero';
import NavBar from '../src/components/NavBar/NavBar';
import Offer from '../src/components/Offer/Offer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Laboratorium protetyczne | ASGOLAB</title>
        <meta
          name='description'
          content='Laboratorium protetyczne specjalizujące się w usługach zakresu nowoczesnej techniki dentystyczne CAD/CAM, znajdujące się w centrum Tychów. | ASGOLAB'
        />
        <link rel='icon' href='/ASGOLAB_favicon.svg' />
      </Head>
      <header>
        <NavBar />
      </header>

      <main>
        <Hero />
        <Offer />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;
