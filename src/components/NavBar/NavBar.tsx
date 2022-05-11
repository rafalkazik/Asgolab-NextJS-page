import Image from 'next/image';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='hero' spy={true} smooth={true} offset={0} duration={500}>
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
                offset={0}
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
                offset={0}
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
