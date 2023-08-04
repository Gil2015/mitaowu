import { render } from 'preact';
import { BrowserRouter } from 'react-router-dom';
import App from '@/pages/Layout';
import 'animate.css';
import '@/styles/reset.less';
import '@/styles/common.less';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
