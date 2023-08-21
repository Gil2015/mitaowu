import { render } from 'preact';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from '@/pages/Layout';
import 'animate.css';
import '@/styles/reset.less';
import '@/styles/common.less';

render(
  <ParallaxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ParallaxProvider>,
  document.getElementById('app'),
);
