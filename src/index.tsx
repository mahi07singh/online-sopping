import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

// Traditional method without createRoot
ReactDOM.render(
  // eslint-disable-next-line react/jsx-no-undef
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
