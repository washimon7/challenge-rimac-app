import { useQuoteInsurance } from '../hooks/useQuoteInsurance';

export const QuoteInsurancePage = () => {
  const { userInfo } = useQuoteInsurance();

  return (
    <main className='quote-insurance-container'>
      <section>
        <span>IC</span>
        <span>Paso 2 de 2</span>
        <div></div>
      </section>
      <section className='vehicle-info'>
        <h2>Hola, {userInfo?.name}</h2>
        <h2>Mira las coberturas</h2>
        <p>Conoce las coberturas de tu plan</p>
        <article>
          <div>
            <span>Placa: C2U-114</span>
            <span>Wolkswagen 2019 Golf</span>
          </div>
          <img src='' alt='Character' />
        </article>
      </section>
      <section>
        <h5>Indica la suma asegurada</h5>
        <div>
          <span>MIN $12.500</span>|<span>MAX $16.500</span>
        </div>
        <form>
          <span>-</span>
          <span>$14.300</span>
          <span>+</span>
        </form>
      </section>
      <section>
        <h4>Agrega o quita coberturas</h4>
      </section>
    </main>
  );
};
