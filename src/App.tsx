import { Outlet } from 'react-router-dom';
import { Header } from './components';
import './styles/_main.scss';

function App() {
  return (
    <div className='main-wrapper'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
