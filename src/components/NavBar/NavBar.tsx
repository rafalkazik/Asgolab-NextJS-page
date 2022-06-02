import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { NavContext } from '../../Context/NavContext';

const NavBar = () => {
  const navRef = useRef<HTMLDivElement | any>();
  const [navHeight, setNavHeight] = useState(0);
  const heightData: any = useContext(NavContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setNavHeight(navRef.current.clientHeight);
      heightData.setNavHeightContext(navRef.current.clientHeight);
    }, 1500);
    return () => clearInterval(interval);
  }, [navHeight]);

  return (
    <nav className='navbar'>
      <div className='navbar-container' ref={navRef}>
        <Link
          to='hero'
          spy={true}
          smooth={true}
          offset={-112}
          duration={500}
          href={'/'}
        >
          <img
            src='/ASGOLAB_logo.svg'
            alt='ASGOLAB logo'
            className='navbar__logo'
          />
        </Link>
        <div className='navbar__menu menu'>
          <ul className='menu__list'>
            <li className='menu__list-item'>
              <Link
                to='offer'
                spy={true}
                smooth={true}
                offset={-navHeight}
                duration={500}
                href={'/offer'}
              >
                Oferta
              </Link>
            </li>
            <li className='menu__list-item'>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={-navHeight}
                duration={500}
                href={'/contact'}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
