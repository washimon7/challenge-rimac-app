import ThankYouImage1 from '../assets/images/thank-you-1.png';
import ThankYouImage2 from '../assets/images/thank-you-2.png';
import { Footer } from '../components/shared/Footer';

export const QuotedInsurancePage = () => {
  return (
    <main className='quoted-insurance-container'>
      <section className='background'>
        <img
          className='background__mobile-image'
          src={ThankYouImage1}
          alt='gracias'
        />
        <img
          className='background__web-image'
          src={ThankYouImage2}
          alt='gracias'
        />
      </section>
      <section className='welcome'>
        <h1 className='welcome__title'>
          <span>!Te damos la bienvenida!</span> Cuenta con nosotros para
          proteger tu vehículo
        </h1>
        <p>
          Enviaremos la confirmación de compra de tu Plan Vehicular Tracking a
          tu correo:
          <br />
          <span>joel.sanchez@gmail.com</span>
        </p>
        <button>Cómo usar mi seguro</button>
      </section>
      <div className='quoted-insurance-footer'>
        <Footer />
      </div>
    </main>
  );
};
