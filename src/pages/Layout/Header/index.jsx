import { useState, useCallback } from 'react';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import './style.less';

const navList = [
  {
    title: '九子系列',
    path: '/detail/nine',
    img: '/cls_jiuzi.jpg',
  },
  {
    title: '机车系列',
    path: '/detail/loco',
    img: '/cls_jiche.jpg',
  },
  {
    title: '情人节系列',
    path: '/detail/lover',
    img: '/cls_qing.jpg',
  },
  {
    title: '球宝贝系列',
    path: '/detail/ball',
    img: '/cls_qiu.jpg',
  },
];

const menuList = [
  { title: '线上商城', path: '' },
  { title: '关于我们', path: '/about' },
  { title: '联系我们', path: '/contact' },
];

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeNav, setActiveNav] = useState(0);

  const hideNav = useCallback(() => {
    setShowNav(false);
  });

  return (
    <div class="layout-header">
      <div className="default-header">
        <div class="logo">
          <Link to="/home">
            <img src="/logo.png" />
          </Link>
        </div>
        <div class="show-btn" onClick={() => setShowNav(true)}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={cls('header-con', { active: showNav })}>
        <div class={cls('close-btn', { active: showNav })} onClick={hideNav}>
          <span></span>
          <span></span>
        </div>
        <div class="nav-con">
          <div className="img-blk">
            {activeNav ? (
              <img class="cls-img" src={navList[activeNav - 1].img} />
            ) : (
              <div class="logo-blk">
                <img class="img-logo" src="/cls_logo.jpg" />
              </div>
            )}
          </div>
          <div class="nav-blk">
            <ul class="nav-list">
              <li class="title">产品系列</li>
              {navList.map(({ title, path }, idx) => (
                <li
                  className="nav-item"
                  key={idx}
                  onMouseOver={() => setActiveNav(idx + 1)}
                  onMouseLeave={() => setActiveNav(0)}
                  onClick={hideNav}
                >
                  <Link to={path}>{title}</Link>
                </li>
              ))}
            </ul>
            <ul class="menu-list">
              {menuList.map(({ title, path }) => (
                <li className="menu-item" key={title} onClick={hideNav}>
                  <Link to={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
