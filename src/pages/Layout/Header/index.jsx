import { useState } from 'react';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import './style.less';

const navList = [
  {
    title: '九子系列',
    path: '/detail/nine',
    img: 'public/cls_jiuzi.jpg',
  },
  {
    title: '机车系列',
    path: '/detail/loco',
    img: 'public/cls_jiche.jpg',
  },
  {
    title: '情人节系列',
    path: '/detail/lover',
    img: 'public/cls_qing.jpg',
  },
  {
    title: '球宝贝系列',
    path: '/detail/ball',
    img: 'public/cls_qiu.jpg',
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

  return (
    <div class="layout-header">
      <div className="default-header">
        <div class="logo">
          <img src="public/logo.png" />
        </div>
        <div class="show-btn" onClick={() => setShowNav(true)}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={cls('header-con', { active: showNav })}>
        <div
          class={cls('close-btn', { active: showNav })}
          onClick={() => setShowNav(false)}
        >
          <span></span>
          <span></span>
        </div>
        <div class="nav-con">
          <div className="img-blk">
            {activeNav ? (
              <img class="cls-img" src={navList[activeNav - 1].img} />
            ) : (
              <div class="logo-blk">
                <img class="img-logo" src="public/cls_logo.jpg" />
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
    </div>
  );
};

export default Header;
