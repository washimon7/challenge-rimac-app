import { useQuoteInsurance } from '../hooks/useQuoteInsurance';
import ICBack from '../assets/icons/ic_back.svg';
import ICRedBack from '../assets/icons/ic_red_back.svg';
import ICDecrease from '../assets/icons/ic_remove.svg';
import ICIncrease from '../assets/icons/ic_add.svg';
import ICArrowUp from '../assets/icons/ic_arrow_up.svg';
import ICArrowDown from '../assets/icons/ic_arrow_down.svg';
import Character from '../assets/images/char3.png';
import ICTheft from '../assets/icons/ic_theft.svg';
import ICDamage from '../assets/icons/ic_damage.svg';
import ICPerdidaTotal from '../assets/icons/ic_perdidatotal.svg';
import ICDissableNum1 from '../assets/icons/ic_dissable_num1.svg';
import ICAbleNum2 from '../assets/icons/icon_able_num2.svg';
import ICRedArrowUp from '../assets/icons/ic_red_arrow_up.svg';
import ICRedArrowDown from '../assets/icons/ic_red_arrow_down.svg';
import ICCircleAdd from '../assets/icons/ic_circle_add.svg';
import ICCircleRemove from '../assets/icons/ic_circle_remove.svg';
import ICCheck from '../assets/icons/ic_check.svg';

export const QuoteInsurancePage = () => {
  const { userInfo } = useQuoteInsurance();

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
          <img src={ICRedBack} alt='regresar' />
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
              <span className='insurance__vehicle-plate'>Placa: C2U-114</span>
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
            <input type='number' step='0.01' />
            <img
              className='insurance__decrease-button'
              src={ICDecrease}
              alt='decrease'
            />
            <img
              className='insurance__increase-button'
              src={ICIncrease}
              alt='increase'
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
          <ul className='insurance-coverages__options'>
            <li className='insurance-coverages__option insurance-coverages__option--expanded'>
              <div className='insurance-coverages__option-img'>
                <img src={ICTheft} alt='coverage' />
              </div>
              <div className='insurance-coverages__option-content insurance-coverages__option-content--expanded'>
                <div className='insurance-coverages__option-input'>
                  <span>Llanta robada</span>
                  <label className='switch'>
                    <input type='checkbox' />
                    <span className='slider round'></span>
                  </label>
                  <img
                    className='insurance-coverages__button-show insurance-coverages__button-show--expanded'
                    src={ICRedArrowDown}
                    alt='mostrar'
                  />
                  <img
                    className='insurance-coverages__button-hide insurance-coverages__button-hide--expanded'
                    src={ICRedArrowUp}
                    alt='ocultar'
                  />
                </div>
                <div className='insurance-coverages__remove-option insurance-coverages__remove-option--expanded'>
                  <img src={ICCircleRemove} alt='icon' />
                  <span>quitar</span>
                </div>
                <p>
                  He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo Sant Cugat, al lado de
                  Barcelona con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis.
                </p>
                <div className='insurance-coverages__button-show-content insurance-coverages__button-show-content--expanded'>
                  <span>Ver menos</span>
                  <img src={ICArrowUp} alt='icon mostrar' />
                </div>
              </div>
            </li>
            <li className='insurance-coverages__option'>
              <div className='insurance-coverages__option-img'>
                <img src={ICDamage} alt='coverage' />
              </div>
              <div className='insurance-coverages__option-content'>
                <div className='insurance-coverages__option-input'>
                  <span>Choque y/o pasarte la luz roja</span>
                  <label className='switch'>
                    <input type='checkbox' />
                    <span className='slider round'></span>
                  </label>
                  <img
                    className='insurance-coverages__button-show'
                    src={ICRedArrowDown}
                    alt='mostrar'
                  />
                  <img
                    className='insurance-coverages__button-hide'
                    src={ICRedArrowUp}
                    alt='ocultar'
                  />
                </div>
                <div className='insurance-coverages__add-option'>
                  <img src={ICCircleAdd} alt='icon' />
                  <span>agregar</span>
                </div>
                <p>
                  He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo Sant Cugat, al lado de
                  Barcelona con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis.
                </p>
                <div className='insurance-coverages__button-show-content'>
                  <span>Ver más</span>
                  <img src={ICArrowDown} alt='icon mostrar' />
                </div>
              </div>
            </li>
            <li className='insurance-coverages__option'>
              <div className='insurance-coverages__option-img'>
                <img src={ICPerdidaTotal} alt='coverage' />
              </div>
              <div className='insurance-coverages__option-content'>
                <div className='insurance-coverages__option-input'>
                  <span>Atropello en la vía Evitamiento</span>
                  <label className='switch'>
                    <input type='checkbox' />
                    <span className='slider round'></span>
                  </label>
                  <img
                    className='insurance-coverages__button-show'
                    src={ICRedArrowDown}
                    alt='mostrar'
                  />
                  <img
                    className='insurance-coverages__button-hide'
                    src={ICRedArrowUp}
                    alt='ocultar'
                  />
                </div>
                <div className='insurance-coverages__add-option'>
                  <img src={ICCircleAdd} alt='icon' />
                  <span>agregar</span>
                </div>
                <p>
                  He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo Sant Cugat, al lado de
                  Barcelona con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis.
                </p>
                <div className='insurance-coverages__button-show-content'>
                  <span>Ver más</span>
                  <img src={ICArrowDown} alt='icon mostrar' />
                </div>
              </div>
            </li>
          </ul>
        </article>
      </section>
      <section className='purchase-confirmation'>
        <h4 className='purchase-confirmation__caption'>Monto</h4>
        <div className='purchase-confirmation__price'>
          <span>$35.00</span>
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
        <button>Lo quiero</button>
      </section>
    </main>
  );
};
