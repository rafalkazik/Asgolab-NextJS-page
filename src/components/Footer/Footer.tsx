const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer__content'>
          <p className='footer__content-text'>asgolab © 2022</p>
          <p className='footer__content-text'>laboratorium protetyczne</p>
        </div>
        <div className='footer__content'>
          <a
            href='https://www.facebook.com/asgolab.protetyka'
            className='footer__content-text'
          >
            facebook.com/asgolab.protetyka
          </a>
        </div>
        <div className='footer__content footer__content--logo'>
          <img
            src='/ASGOLAB_logo_footer.svg'
            alt='ASGOLAB logo'
            className='footer__logo'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
