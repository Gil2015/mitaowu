import { Routes, Route } from 'react-router-dom';
import routes from '@/configs/routes';
import Header from './Header';
import Footer from './Footer';
import './style.less';

const Router = () => {
  return (
    <Routes>
      {routes.map(({ component: Comp, ...rest }) => (
        <Route key={rest.path} element={<Comp />} {...rest} />
      ))}
    </Routes>
  );
};

const Layout = () => {
  return (
    <div class="layout-con">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
