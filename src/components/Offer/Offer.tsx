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
                    Korona cyrkonowa jest koroną wykonaną na podbudowie z tlenku
                    cyrkonu, który jest krystalicznym ciałem stałym odpornym
                    chemicznie oraz materiałem biozgodnym. Korony i mosty na
                    tlenku cyrkonu są bardzo wytrzymałe na zginanie, trwałe i
                    elastyczne. Materiał doskonale jest tolerowany przez
                    organizm ludzki. Cyrkon daje efekt autentycznej
                    przezierności naturalnie zdrowego zęba ludzkiego.
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
                    Pozwalają na stworzenie naturalnego i estetycznego{' '}
                    uzupełnienia, które pacjent utracił w wyniku zniszczenia
                    zębów stałych (np. patologicznego starcia zębów, po leczeniu
                    kanałowym). Odbudowę można również zamocować na implancie co
                    spowoduje odtworzenie brakującego zęba. Koronę porcelanową
                    można osadzić na implancie zacementowanym na łączniku{' '}
                    implantologicznym albo na oszlifowanym filarze zęba
                    własnego.
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
                    Most protetyczny jest uzupełnieniem odtwarzającym utracone
                    zęby pacjenta, cementowane na stałe. Most składa się
                    przynajmniej z dwóch koron protetycznych osadzonych na
                    oszlifowanych filarach zębów własnych oraz przęsła lub
                    przęseł brakujących zębów. Popularność tej metody wynika z
                    połączenia estetyki z funkcjonalnością.
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
                    Zakres naszej współpracy obejmuje także protetykę na
                    implantach (łączniki implantologiczne). Implanty wszczepia{' '}
                    się u pacjentów, którzy utracili własne zęby aby zastąpić im
                    “korzeń zęba”. Implant wszczepia się w kość szczęki lub
                    żuchwy aby stały się filarem odbudowanego zęba, czy też
                    stanowiły podporę w moście lub implanty stają się elementem{' '}
                    do mocowania wyjmowanych protez ruchomych.
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
                    Proteza wykonana z Acronu może być używana przez pacjenta,
                    bez ograniczeń czasowych, nawet kilka lat. Ogromny atut
                    protezy z acronu to estetyczne klamry w kolorze dziąsła,
                    dzięki temu idealnie komponują się w ustach pacjenta i nie{' '}
                    są widoczne.{' '}
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
                    Acetal jest materiałem przeznaczonym do wykonania
                    konstrukcji protez podpartych – szkieletowych. Protezy
                    wykonuje się metodą wtrysku pod ciśnieniem. Klamry w
                    protezie z acetalu mają kolor zębów co poprawia estetykę.
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
                    Proteza z Vitaplexu posiada dwukrotnie większą wytrzymałości
                    mechaniczną niż proteza akrykowa. Eliminuje skurcz co wpływa{' '}
                    na lepsze utrzymanie protezy w jamie ustnej, lżejsza,
                    delikatniejsza, bardziej komfortowa.
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
                    Inlay i onlay to rozwiązania protetyczne przypominające
                    korony. Inlay oznacza wkład, natomiast onlay nakład. W obu
                    przypadkach ząb jest odbudowywany za pomocą kompozytowego
                    elementu, który ma zastąpić koronę zęba. Stosując inlay i
                    onlay techniczny odbudowujemy bardzo dużą powierzchnię zęba{' '}
                    co umożliwia długotrwałe funkcjonowanie oraz zmniejsza
                    ryzyka złamania zęba w odróżnieniu od zwykłego wypełnienia
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
                    Protezy akrylowe całkowite oraz częściowe
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
                    szyny do wybielania, szyny dla sportowców, szyny
                    relaksacyjne, szyny Michigen,
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
