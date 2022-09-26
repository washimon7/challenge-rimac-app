import { Outlet } from 'react-router-dom';
import { Header } from './components';
import './styles/_main.scss';

function App() {
  return (
    <main>
      <section>
        <Header />
        <Outlet />
      </section>
    </main>
  );
}

export default App;
