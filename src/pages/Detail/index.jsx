import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import './style.less';

const detailData = [];

const DetailPage = () => {
  return (
    <div class="detail-page">
      <ParallaxBanner
        layers={[
          { image: '/banner-background.jpeg', speed: -20 },
          {
            speed: -15,
            children: (
              <div className="banner-img">
                <h1>Hello World!</h1>
              </div>
            ),
          },
          { image: '/banner-foreground.png', speed: -10 },
        ]}
        className="banner-box"
      />
      <ParallaxBanner layers={[]} className="detail-box" />
    </div>
  );
};

export default DetailPage;
