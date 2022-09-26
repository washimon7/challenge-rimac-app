import AdvertisingImg1 from '../assets/images/image1.png';
import AdvertisingImg2 from '../assets/images/image2.png';
import ChevrotIcon from '../assets/icons/ic_chevrot.svg';
import { Footer } from '../components/shared/Footer';

export const HomePage = () => {
  return (
    <main className='home-container'>
      <section className='advertising'>
        <img
          className='advertising__image2'
          src={AdvertisingImg2}
          alt='Seguro vehicular'
        />
        <div className='advertising__content'>
          <h5 className='advertising__subtitle'>¡Nuevo!</h5>
          <h1 className='advertising__title'>
            Seguro vehicular{' '}
            <span className='advertising__title--red'>Tracking</span>
          </h1>
          <p className='advertising__description'>
            Cuéntanos donde le haras seguimiento a tu seguro
          </p>
        </div>
        <img
          className='advertising__image1'
          src={AdvertisingImg1}
          alt='Seguro vehicular'
        />
        <Footer />
      </section>
      <form className='home-form'>
        <h2 className='home-form__title'>Déjanos tus datos</h2>
        <div className='home-form__doc-input'>
          <div className='home-form__doc-label'>
            <span>DNI</span>
            <img src={ChevrotIcon} alt='chevron down' />
          </div>
          <input
            className='home-form__input'
            placeholder='Nro. de doc'
            type='text'
          />
        </div>
        <input className='home-form__input' placeholder='Celular' type='text' />
        <input className='home-form__input' placeholder='Placa' type='text' />
        <div className='home-form__check-input'>
          <input type='checkbox' />
          <p>
            Acepto la <span>Política de Protección de Datos Personales</span> y
            los <span>Términos y Condiciones</span>
          </p>
        </div>
        <button>Cotízalo</button>
      </form>
    </main>
  );
};
