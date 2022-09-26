import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import { HomePage, QuotedInsurancePage, QuoteInsurancePage } from '../pages';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='arma-tu-plan' element={<QuoteInsurancePage />} />
          <Route path='gracias' element={<QuotedInsurancePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
