import Image from 'next/image';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Image
          src='/ASGOLAB_logo.svg'
          height='100%'
          width='100%'
          alt='ASGOLAB logo'
        />
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
