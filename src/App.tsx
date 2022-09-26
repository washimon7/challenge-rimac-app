import { Provider } from 'react-redux';
import { store } from './app/store';
import './styles/_main.scss';

function App() {
  return (
    <Provider store={store}>
      <div>Main</div>
    </Provider>
  );
}

export default App;
