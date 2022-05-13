import Link from 'next/link';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact-container'>
        <header className='contact__header'>
          <h5 className='contact__header-text'>Kontakt</h5>
        </header>
        <div className='contact__content'>
          <p className='contact__content-text'>
            Profesjonalizm połączony z precyzją i starannością oraz dbałością o
            szczegóły to atut naszej pracowni.{' '}
          </p>
          <Link href='mailto:biuro@asgolab.com.pl'>
            <button className='contact__content-button'>
              Zapytaj o współpracę
            </button>
          </Link>
        </div>
        <div className='contact__data'>
          <p className='contact__data-text'>+48 504 627 818</p>
          <p className='contact__data-text'>
            ul. Poziomkowa 47 <br />
            43-100 Tychy
          </p>
          <p className='contact__data-text'>biuro@asgolab.com.pl</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
