import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const navRef = useRef<HTMLDivElement | any>();
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNavHeight(navRef.current.clientHeight);
    }, 2000);
    return () => clearInterval(interval);
  }, [navHeight]);

  return (
    <nav className='navbar'>
      <div className='navbar-container' ref={navRef}>
        <Link to='hero' spy={true} smooth={true} offset={-112} duration={500}>
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
