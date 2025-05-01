import "./index.scss";
import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const heroBanners = [
  {
    image: 'https://nhathuocthanthien.com.vn/wp-content/uploads/2022/09/dgm_nttt_banner-ca-gai-leo-1100-550px.jpg',
    title: 'Boost Immunity, Healthy Life',
    subtitle: 'Discover HealthMart',
    label: 'Healthy Habits Start Here'
  },
  {
    image: 'https://nhathuocthanthien.com.vn/wp-content/uploads/2022/04/dgm_nttt_keiko-banner-900x450-1.jpg',
    title: 'Shop Exclusive Deals',
    subtitle: 'Don’t Miss Out!',
    label: 'Big Discounts Today'
  },
  {
    image: 'https://nhathuocthanthien.com.vn/wp-content/uploads/2024/12/dgm_nttt_fitobimbi-sonno-gocce-banner.jpg',
    title: 'Baby',
    subtitle: 'Don’t Miss Out!',
    label: 'Big Discounts Today'
  },

];


export const HeroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    pauseOnHover: true
  };

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Slider {...settings}>
              {heroBanners.map((item, index) => (
                <div key={index}>
                  <div
                    className="rounded-lg p-8 relative bg-cover bg-center"
                    style={{
                      minHeight: '400px',
                      backgroundImage: `url('${item.image}')`
                    }}
                  >

                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="">
            <div className='herro-section-content-right-wrap'>
              <div className='herro-section-content-first'>
                <img src="https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/Slider-banner-02-600x207.jpg" alt="" />
              </div>
              <div className='herro-section-content-second-wrap'>
                <div className="herro-section-content-img">
                  <img src="https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/Slider-banner-03.jpg" alt="" />
                </div>
                <div className="herro-section-content-img">
                  <img src="https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/Slider-banner-04.jpg" alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;