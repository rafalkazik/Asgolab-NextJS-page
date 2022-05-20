import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Lottie from 'lottie-web';

const Hero = () => {
  const backgroundDesktop = useRef<any>(null);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: backgroundDesktop.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'HeroLinesDesktop.json',
    });
    return () => instance.destroy();
  });

  return (
    <div className='hero' id='hero'>
      <div className='hero-container'>
        <div
          className='hero__content-background-desktop'
          ref={backgroundDesktop}
        />
        <div className='hero__content'>
          <h1 className='hero__content-text'>
            Laboratorium protetyczne specjalizujące się w usługach zakresu
            nowoczesnej techniki dentystyczne CAD/CAM, znajdujące się w centrum
            Tychów.
          </h1>
          <Link
            to='offer'
            spy={true}
            smooth={true}
            offset={-112}
            duration={500}
          >
            <button className='hero__content-button'>
              Poznaj zakres usług
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
