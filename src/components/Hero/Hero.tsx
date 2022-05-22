import { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-scroll';
import Lottie from 'lottie-web';
import { NavContext } from '../../Context/navContext';

const Hero = () => {
  const backgroundDesktop = useRef<any>(null);
  const heightData: any = useContext(NavContext);

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
            Laboratorium protetyczne specjalizujące{' '}
            <span className='separator'>się w usługach</span> zakresu
            nowoczesnej techniki dentystyczne CAD/CAM, znajdujące{' '}
            <span className='separator'>się w</span> centrum Tychów.
          </h1>
          <Link
            to='offer'
            spy={true}
            smooth={true}
            offset={-heightData.navHeightContext}
            duration={500}
            href={'/offer'}
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
