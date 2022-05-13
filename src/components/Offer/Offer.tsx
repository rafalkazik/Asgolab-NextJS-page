import { useState } from 'react';
import { firstOfferData } from './OfferData';
import { secondOfferData } from './OfferData';
import { thirdOfferData } from './OfferData';

const Offer = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const toggleAccordion1 = () => {
    setActive1(!active1);
    console.log(active1);
  };
  const toggleAccordion2 = () => {
    setActive2(!active2);
    console.log(active2);
  };
  const toggleAccordion3 = () => {
    setActive3(!active3);
    console.log(active3);
  };

  return (
    <div className='offer' id='offer'>
      <div className='offer-container'>
        <header className='offer__header'>
          <h5 className='offer__header-text'>Oferta</h5>
        </header>
        <div className='offer__accordion accordion'>
          <ul className='accordion__offer-list offer-list'>
            <li className='offer-list__item'>
              <div className='offer-list__category'>
                <div className='offer-list__toggle' onClick={toggleAccordion1}>
                  <h5 className='offer-list__toggle-title'>korony i mosty</h5>
                  <button className='offer-list__toggle-button-container'>
                    <p className='offer-list__toggle-button-text'>
                      {active1 === false ? 'rozwiń' : 'zwiń'}
                    </p>
                    <img
                      src='/Arrow_icon.svg'
                      alt='arrow icon'
                      className={
                        active1 === false
                          ? 'offer-list__toggle-button-arrow'
                          : 'offer-list__toggle-button-arrow--active'
                      }
                    />
                  </button>
                </div>
                {firstOfferData.map((item) => (
                  <div
                    className={
                      active1 === false
                        ? 'offer-list__content'
                        : 'offer-list__content--active'
                    }
                    key={item.id}
                  >
                    <p className='offer-list__content-title'>{item.title}</p>
                    <p className='offer-list__content-text'>{item.content}</p>
                  </div>
                ))}
              </div>
            </li>
            <li className='offer-list__item'>
              <div className='offer-list__category'>
                <div className='offer-list__toggle' onClick={toggleAccordion2}>
                  <h5 className='offer-list__toggle-title'>
                    protetyka na implantach
                  </h5>
                  <button className='offer-list__toggle-button-container'>
                    <p className='offer-list__toggle-button-text'>
                      {active2 === false ? 'rozwiń' : 'zwiń'}
                    </p>
                    <img
                      src='/Arrow_icon.svg'
                      alt='arrow icon'
                      className={
                        active2 === false
                          ? 'offer-list__toggle-button-arrow'
                          : 'offer-list__toggle-button-arrow--active'
                      }
                    />
                  </button>
                </div>
                {secondOfferData.map((item) => (
                  <div
                    className={
                      active2 === false
                        ? 'offer-list__content'
                        : 'offer-list__content--active'
                    }
                    key={item.id}
                  >
                    <p className='offer-list__content-title'>{item.title}</p>
                    <p className='offer-list__content-text'>{item.content}</p>
                  </div>
                ))}
              </div>
            </li>
            <li className='offer-list__item'>
              <div className='offer-list__category'>
                <div className='offer-list__toggle' onClick={toggleAccordion3}>
                  <h5 className='offer-list__toggle-title'>
                    protezy elastyczne
                  </h5>
                  <button className='offer-list__toggle-button-container'>
                    <p className='offer-list__toggle-button-text'>
                      {active3 === false ? 'rozwiń' : 'zwiń'}
                    </p>
                    <img
                      src='/Arrow_icon.svg'
                      alt='arrow icon'
                      className={
                        active3 === false
                          ? 'offer-list__toggle-button-arrow'
                          : 'offer-list__toggle-button-arrow--active'
                      }
                    />
                  </button>
                </div>
                {thirdOfferData.map((item) => (
                  <div
                    className={
                      active3 === false
                        ? 'offer-list__content'
                        : 'offer-list__content--active'
                    }
                    key={item.id}
                  >
                    <p className='offer-list__content-title'>{item.title}</p>
                    <p className='offer-list__content-text'>{item.content}</p>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offer;
