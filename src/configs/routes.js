import Home from '@/pages/Home';
import About from '@/pages/About';
import NotFound from '@/pages/404';

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
    path: '/about',
    component: About,
  },
  {
    path: '*',
    component: NotFound,
  },
];
