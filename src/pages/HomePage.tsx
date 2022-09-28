import AdvertisingImg1 from '../assets/images/char1.png';
import AdvertisingImg2 from '../assets/images/char2.png';
import RedArrowDown from '../assets/icons/ic_red_arrow_down.svg';
import { Footer } from '../components/shared/Footer';
import { useGetUserInfo } from '../hooks/useGetUserInfo';

export const HomePage = () => {
  const {
    user,
    canSubmit,
    isGettingUserInfo,
    isAcceptedTerms,
    doGetUserInfo,
    handleCheckboxChange,
    handleInputChange,
  } = useGetUserInfo();
  const { docNumber, cellphoneNumber, plateNumber } = user;

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
        <div className='home-footer'>
          <Footer />
        </div>
      </section>
      <form onSubmit={doGetUserInfo} className='home-form'>
        <h2 className='home-form__title'>Déjanos tus datos</h2>
        <div className='home-form__doc-input'>
          <div className='home-form__doc-label'>
            <span>DNI</span>
            <img src={RedArrowDown} alt='chevron down' />
          </div>
          <input
            onChange={handleInputChange}
            className='home-form__input'
            name='docNumber'
            value={docNumber}
            placeholder='Nro. de doc'
            type='text'
            pattern='\d{8}'
            title='Sólo 8 dígitos'
          />
        </div>
        <input
          onChange={handleInputChange}
          className='home-form__input'
          value={cellphoneNumber}
          name='cellphoneNumber'
          placeholder='Celular'
          type='tel'
        />
        <input
          onChange={handleInputChange}
          className='home-form__input'
          value={plateNumber}
          name='plateNumber'
          placeholder='Placa'
          type='text'
        />
        <div className='home-form__check-input'>
          <input
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={isAcceptedTerms}
          />
          <p>
            Acepto la <span>Política de Protección de Datos Personales</span> y
            los <span>Términos y Condiciones</span>
          </p>
        </div>
        <button disabled={!canSubmit || isGettingUserInfo}>
          {isGettingUserInfo ? 'Cotizando..' : 'Cotízalo'}
        </button>
      </form>
    </main>
  );
};
