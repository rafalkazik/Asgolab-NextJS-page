import { useState } from 'react';

const Offer = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  const toggleAccordion1 = () => {
    setActive1(!active1);
  };

  const toggleAccordion2 = () => {
    setActive2(!active2);
  };

  const toggleAccordion3 = () => {
    setActive3(!active3);
  };

  const toggleAccordion4 = () => {
    setActive4(!active4);
  };

  const toggleAccordion5 = () => {
    setActive5(!active5);
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
                <div
                  className={
                    active1 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>
                    Korony i mosty na cyrkonie
                  </p>
                  <p className='offer-list__content-text'>
                    Korona cyrkonowa{' '}
                    <span className='separator'>jest koroną</span> wykonaną{' '}
                    <span className='separator'>na podbudowie</span>{' '}
                    <span className='separator'>z tlenku</span> cyrkonu, który{' '}
                    <span className='separator'>jest krystalicznym</span> ciałem
                    stałym odpornym chemicznie{' '}
                    <span className='separator'>oraz materiałem</span>{' '}
                    biozgodnym. Korony{' '}
                    <span className='separator'>i mosty</span>{' '}
                    <span className='separator'>na tlenku</span> cyrkonu{' '}
                    <span className='separator'>są bardzo</span> wytrzymałe{' '}
                    <span className='separator'>na zginanie</span>, trwałe{' '}
                    <span className='separator'>i elastyczne.</span> Materiał
                    doskonale jest tolerowany{' '}
                    <span className='separator'>przez organizm</span> ludzki.
                    Cyrkon daje efekt autentycznej przezierności naturalnie
                    zdrowego zęba ludzkiego.
                  </p>
                </div>
                <div
                  className={
                    active1 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>
                    Korony Porcelanowe na metalu
                  </p>
                  <p className='offer-list__content-text'>
                    Pozwalają <span className='separator'>na stworzenie </span>{' '}
                    naturalnego{' '}
                    <span className='separator'>i estetycznego</span>{' '}
                    uzupełnienia, które pacjent utracił{' '}
                    <span className='separator'>w wyniku</span> zniszczenia
                    zębów stałych (np. patologicznego starcia zębów,{' '}
                    <span className='separator'>po leczeniu</span> kanałowym).
                    Odbudowę można również zamocować{' '}
                    <span className='separator'>na implancie</span>{' '}
                    <span className='separator'>co spowoduje</span> odtworzenie
                    brakującego zęba. Koronę porcelanową można osadzić{' '}
                    <span className='separator'>na implancie</span>{' '}
                    zacementowanym{' '}
                    <span className='separator'>na łączniku </span>{' '}
                    implantologicznym{' '}
                    <span className='separator'>albo na oszlifowanym</span>{' '}
                    filarze zęba własnego.
                  </p>
                </div>
                <div
                  className={
                    active1 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>Most protetyczny</p>
                  <p className='offer-list__content-text'>
                    Most protetyczny{' '}
                    <span className='separator'>jest uzupełnieniem</span>{' '}
                    odtwarzającym utracone zęby pacjenta, cementowane{' '}
                    <span className='separator'>na stałe.</span> Most składa{' '}
                    <span className='separator'>się przynajmniej</span>{' '}
                    <span className='separator'>z dwóch</span> koron
                    protetycznych osadzonych{' '}
                    <span className='separator'>na oszlifowanych</span> filarach
                    zębów własnych{' '}
                    <span className='separator'>oraz przęsła</span>{' '}
                    <span className='separator'>lub przęseł</span> brakujących
                    zębów. Popularność tej metody wynika{' '}
                    <span className='separator'>z połączenia</span> estetyki{' '}
                    <span className='separator'>z funkcjonalnością.</span>
                  </p>
                </div>
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

                <div
                  className={
                    active2 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>Implanty</p>
                  <p className='offer-list__content-text'>
                    Zakres naszej współpracy obejmuje także protetykę{' '}
                    <span className='separator'>na implantach</span> (łączniki
                    implantologiczne). Implanty wszczepia{' '}
                    <span className='separator'>się u pacjentów</span>, którzy
                    utracili własne zęby{' '}
                    <span className='separator'>aby zastąpić</span> im “korzeń
                    zęba”. Implant wszczepia{' '}
                    <span className='separator'>się w kość</span> szczęki{' '}
                    <span className='separator'>lub żuchwy</span>{' '}
                    <span className='separator'>aby stały</span>{' '}
                    <span className='separator'>się filarem</span> odbudowanego
                    zęba, <span className='separator'>czy też stanowiły</span>{' '}
                    podporę <span className='separator'>w moście</span>{' '}
                    <span className='separator'>lub implanty</span> stają{' '}
                    <span className='separator'>się elementem</span>{' '}
                    <span className='separator'>do mocowania</span> wyjmowanych
                    protez ruchomych.
                  </p>
                </div>
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

                <div
                  className={
                    active3 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>Proteza z Acronu</p>
                  <p className='offer-list__content-text'>
                    Proteza wykonana <span className='separator'>z Acronu</span>{' '}
                    może być używana{' '}
                    <span className='separator'>przez pacjenta</span>, bez
                    ograniczeń czasowych, nawet kilka lat. Ogromny atut protezy{' '}
                    <span className='separator'>z acronu</span>{' '}
                    <span className='separator'>to estetyczne</span> klamry{' '}
                    <span className='separator'>w kolorze</span> dziąsła, dzięki
                    temu idealnie komponują{' '}
                    <span className='separator'>się w ustach</span> pacjenta{' '}
                    <span className='separator'>i nie</span>{' '}
                    <span className='separator'>są widoczne.</span>{' '}
                  </p>
                </div>
                <div
                  className={
                    active3 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>Proteza z Acetalu</p>
                  <p className='offer-list__content-text'>
                    Acetal jest materiałem przeznaczonym{' '}
                    <span className='separator'>do wykonania</span>
                    konstrukcji protez podpartych{' '}
                    <span className='separator'>– szkieletowych.</span> Protezy
                    wykonuje <span className='separator'>się metodą</span>{' '}
                    wtrysku <span className='separator'>pod ciśnieniem.</span>{' '}
                    Klamry <span className='separator'>w protezie</span>{' '}
                    <span className='separator'>z acetalu</span> mają kolor
                    zębów <span className='separator'>co poprawia</span>{' '}
                    estetykę.
                  </p>
                </div>
                <div
                  className={
                    active3 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>
                    Proteza z Vitaplexu
                  </p>
                  <p className='offer-list__content-text'>
                    Proteza <span className='separator'>z Vitaplexu</span>{' '}
                    posiada dwukrotnie większą wytrzymałości mechaniczną{' '}
                    <span className='separator'>niż proteza</span> akrykowa.
                    Eliminuje skurcz{' '}
                    <span className='separator'>co wpływa</span>{' '}
                    <span className='separator'>na lepsze</span> utrzymanie
                    protezy <span className='separator'>w jamie</span> ustnej,
                    lżejsza, delikatniejsza, bardziej komfortowa.
                  </p>
                </div>
              </div>
            </li>
            <li className='offer-list__item'>
              <div className='offer-list__category'>
                <div className='offer-list__toggle' onClick={toggleAccordion4}>
                  <h5 className='offer-list__toggle-title'>
                    Onlay, Inlay, Endokorona
                  </h5>
                  <button className='offer-list__toggle-button-container'>
                    <p className='offer-list__toggle-button-text'>
                      {active4 === false ? 'rozwiń' : 'zwiń'}
                    </p>
                    <img
                      src='/Arrow_icon.svg'
                      alt='arrow icon'
                      className={
                        active4 === false
                          ? 'offer-list__toggle-button-arrow'
                          : 'offer-list__toggle-button-arrow--active'
                      }
                    />
                  </button>
                </div>

                <div
                  className={
                    active4 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>
                    Onlay, Inlay, Endokorona
                  </p>
                  <p className='offer-list__content-text'>
                    Inlay i onlay{' '}
                    <span className='separator'>to rozwiązania</span>{' '}
                    protetyczne przypominające korony. Inlay oznacza wkład,
                    natomiast onlay nakład.{' '}
                    <span className='separator'>W obu</span> przypadkach ząb
                    jest odbudowywany{' '}
                    <span className='separator'>za pomocą</span> kompozytowego
                    elementu, który ma zastąpić koronę zęba. Stosując inlay{' '}
                    <span className='separator'>i onlay</span> techniczny
                    odbudowujemy bardzo dużą powierzchnię zęba{' '}
                    <span className='separator'>co umożliwia</span> długotrwałe
                    funkcjonowanie{' '}
                    <span className='separator'>oraz zmniejsza</span> ryzyka
                    złamania zęba{' '}
                    <span className='separator'>w odróżnieniu</span>{' '}
                    <span className='separator'>od zwykłego</span> wypełnienia
                    światłoutwardzalnego.
                  </p>
                </div>
              </div>
            </li>
            <li className='offer-list__item'>
              <div className='offer-list__category'>
                <div className='offer-list__toggle' onClick={toggleAccordion5}>
                  <h5 className='offer-list__toggle-title'>inne usługi</h5>
                  <button className='offer-list__toggle-button-container'>
                    <p className='offer-list__toggle-button-text'>
                      {active5 === false ? 'rozwiń' : 'zwiń'}
                    </p>
                    <img
                      src='/Arrow_icon.svg'
                      alt='arrow icon'
                      className={
                        active5 === false
                          ? 'offer-list__toggle-button-arrow'
                          : 'offer-list__toggle-button-arrow--active'
                      }
                    />
                  </button>
                </div>

                <div
                  className={
                    active5 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>Protezy</p>
                  <p className='offer-list__content-text'>
                    Protezy akrylowe całkowite{' '}
                    <span className='separator'>oraz częściowe</span>
                  </p>
                </div>
                <div
                  className={
                    active5 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>Szyny</p>
                  <p className='offer-list__content-text'>
                    szyny <span className='separator'>do wybielania</span>,
                    szyny <span className='separator'>dla sportowców</span>,
                    szyny relaksacyjne, szyny Michigen,
                  </p>
                </div>
                <div
                  className={
                    active5 === false
                      ? 'offer-list__content'
                      : 'offer-list__content--active'
                  }
                >
                  <p className='offer-list__content-title'>Inne</p>
                  <p className='offer-list__content-text'>
                    Deprogramator Koisa
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offer;
