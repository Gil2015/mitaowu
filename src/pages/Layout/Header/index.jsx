import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.less';

const navList = [
  { title: '九子系列', path: '/detail/:group', img: '' },
  { title: '情人节系列', path: '/detail/:group', img: '' },
  { title: '球宝贝系列', path: '/detail/:group', img: '' },
  { title: '探索者系列', path: '/detail/:group', img: '' },
];

const menuList = [
  { title: '线上商城', path: '' },
  { title: '关于我们', path: '/about' },
  { title: '联系我们', path: '/concat' },
];

const Header = () => {
  const [activeNav, setActiveNav] = useState(NaN);

  return (
    <div class="layout-header">
      <div class="toggle-btn"></div>
      <div class="nav-con">
        <div className="img-blk">{activeNav}</div>
        <div class="nav-blk">
          <ul class="nav-list">
            {navList.map(({ title, path }, idx) => (
              <li
                className="nav-item"
                key={idx}
                onMouseOver={() => setActiveNav(idx)}
                onMouseLeave={() => setActiveNav(NaN)}
              >
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
          <ul class="menu-list">
            {menuList.map(({ title, path }) => (
              <li className="menu-item" key={title}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
