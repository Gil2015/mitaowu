import Home from '@/pages/Home';
import About from '@/pages/About';
import NotFound from '@/pages/404';
import Detail from '@/pages/Detail';
import Contact from '@/pages/Contact';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/detail/:cls',
    component: Detail,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '*',
    component: NotFound,
  },
];
