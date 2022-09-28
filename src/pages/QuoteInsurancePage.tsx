import { useQuoteInsurance } from '../hooks/useQuoteInsurance';
import ICBack from '../assets/icons/ic_back.svg';
import ICRedBack from '../assets/icons/ic_red_back.svg';
import ICDecrease from '../assets/icons/ic_remove.svg';
import ICIncrease from '../assets/icons/ic_add.svg';
import Character from '../assets/images/char3.png';
import ICDissableNum1 from '../assets/icons/ic_dissable_num1.svg';
import ICAbleNum2 from '../assets/icons/icon_able_num2.svg';
import ICCheck from '../assets/icons/ic_check.svg';
import { Coverages } from '../components/quote-insurance/Coverages';

export const QuoteInsurancePage = () => {
  const {
    userInfo,
    amountToInsureVehicle,
    coverages,
    monthlyInsurancePrice,
    handleInputChange,
    handleCheckboxChange,
    increaseAmount,
    decreaseAmount,
    goToHome,
    doRequireInsurance,
  } = useQuoteInsurance();

  return (
    <main className='quote-insurance-container'>
      <section className='quote-state-1'>
        <img src={ICBack} alt='icon back' />
        <span className='quote-state-1__text'>Paso 2 de 2</span>
        <div className='quote-state-1__bar-progress'></div>
      </section>
      <section className='quote-state-2'>
        <div className='quote-state-2__content'>
          <div className='quote-state-2__step'>
            <img className='quote-state-2__icon' src={ICDissableNum1} alt='1' />
            <span className='quote-state-2__text quote-state-2__text--past'>
              Datos
            </span>
          </div>
          <div className='quote-state-2__step'>
            <img className='quote-state-2__icon' src={ICAbleNum2} alt='2' />
            <span className='quote-state-2__text'>Arma tu plan</span>
          </div>
        </div>
      </section>
      <section className='insurance'>
        <div className='insurance__button-back'>
          <img onClick={goToHome} src={ICRedBack} alt='regresar' />
          <span>volver</span>
        </div>
        <div className='insurance__bg'>
          <h2 className='insurance__title1'>Mira las coberturas</h2>
          <h2 className='insurance__title2'>
            Hola, <span>{userInfo?.name}</span>
          </h2>
          <h5 className='insurance__subtitle'>
            Conoce las coberturas de tu plan
          </h5>
          <article className='insurance__vehicle-info'>
            <div>
              <span className='insurance__vehicle-plate'>
                Placa: {userInfo?.plateNumber}
              </span>
              <span className='insurance__vehicle-model'>
                Wolkswagen 2019 Golf
              </span>
            </div>
            <img
              className='insurance__character'
              src={Character}
              alt='character'
            />
          </article>
        </div>
        <article className='insurance__quote-calculation'>
          <div>
            <h4 className='insurance__caption'>Indica la suma asegurada</h4>
            <div className='insurance__maxmin-price'>
              <span>MIN $12.500</span>
              <div className='insurance__divider'></div>
              <span>MAX $16.500</span>
            </div>
          </div>
          <div className='insurance__price-input'>
            <input
              onChange={handleInputChange}
              value={amountToInsureVehicle}
              // type='number'
              pattern='\d'
            />
            <img
              onClick={decreaseAmount}
              className='insurance__decrease-button'
              src={ICDecrease}
              alt='incrementar'
            />
            <img
              onClick={increaseAmount}
              className='insurance__increase-button'
              src={ICIncrease}
              alt='decrementar'
            />
          </div>
        </article>
        <div className='article-divider'></div>
        <article className='insurance-coverages'>
          <h3 className='insurance-coverages__title'>
            Agrega o quita coberturas
          </h3>
          <ul className='insurance-coverages__menu'>
            <li className='insurance-coverages__menu-item insurance-coverages__menu-item--selected'>
              Protege a tu auto
            </li>
            <li className='insurance-coverages__menu-item'>
              Protege a los que te rodean
            </li>
            <li className='insurance-coverages__menu-item'>Mejora tu plan</li>
          </ul>
          <Coverages
            coverages={coverages}
            handleCheckboxChange={handleCheckboxChange}
          />
        </article>
      </section>
      <section className='purchase-confirmation'>
        <h4 className='purchase-confirmation__caption'>Monto</h4>
        <div className='purchase-confirmation__price'>
          <span>${monthlyInsurancePrice}.00</span>
          <span>mensual</span>
        </div>
        <div className='purchase-confirmation__divider'></div>
        <div className='purchase-confirmation__benefits'>
          <p>El precio incluye:</p>
          <ul>
            <li>
              <img src={ICCheck} alt='icon' />
              <span> Llanta de repuesto</span>
            </li>
            <li>
              <img src={ICCheck} alt='icon' />
              <span> Análisis de motor</span>
            </li>
            <li>
              <img src={ICCheck} alt='icon' />
              <span> Aros gratis</span>
            </li>
          </ul>
        </div>
        <button onClick={doRequireInsurance}>Lo quiero</button>
      </section>
    </main>
  );
};
