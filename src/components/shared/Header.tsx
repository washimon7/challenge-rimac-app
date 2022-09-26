import LogoRimac from '../../assets/images/logo-rimac.png';
import PhoneIcon from '../../assets/icons/ic_phone.svg';

export const Header = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={LogoRimac} alt='Rimac Seguros' />
      <div className='header__contact'>
        <span className='header__has-doubt'>¿Tienes alguna duda?</span>
        <p className='header__phone'>
          <img className='header__phone-icon' src={PhoneIcon} alt='Teléfono' />
          <span className='header__call-us'>Llámanos</span>
          <span className='header__phone-number'>(01) 411 6001</span>
        </p>
      </div>
    </header>
  );
};
