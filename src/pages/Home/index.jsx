import cls from 'classnames';
import './style.less';

const bannerData = [
  {
    name: '丘丘',
    pinyin: 'qiuqiu',
    src: '/home/qiuqiu.png',
    cls: 'b-1',
  },
  {
    name: '牙牙',
    pinyin: 'yaya',
    src: '/home/yaya.png',
    cls: 'b-2',
  },
  {
    name: '超超',
    pinyin: 'chaochao',
    src: '/home/chaochao.png',
    cls: 'b-3',
  },
  {
    name: '噗噗',
    pinyin: 'pupu',
    src: '/home/pupu.png',
    cls: 'b-4',
  },
  {
    name: '妮妮',
    pinyin: 'nini',
    src: '/home/nini.png',
    cls: 'b-5',
  },
];

const Home = () => {
  return (
    <div class="home-con">
      <div class="banner-blk">
        {bannerData.map((item, idx) => (
          <div class={cls('banner-item', item.cls)} key={idx}>
            <h3>{item.name}</h3>
            <p>{item.pinyin}</p>
            <img src={item.src} />
          </div>
        ))}
        <div class="cloud">
          <div class="x3 cloud-front"></div>
          <div class="x2 cloud-back"></div>
          <div class="snake"></div>
          <div class="x1 cloud-main"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
