// src/components/Carousel/Carousel.jsx
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
//import BannerWebinar from './BannerWebinar'
//import BannerDiscount from './BannerDiscount'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './carousel.module.css'

import banner from '../../assets/banners/Banner-ED-AR.png'
import bannerMobile from '../../assets/banners/Banner-ED-AR-mobile.png'


const banners = [
  {
    id: 1,
    type: 'image',
    image: banner,
    imageMobile: bannerMobile,
    alt: 'Banner de los productos',
    link: '/productos'
  }
]

const Carousel = () =>{
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 500000, disableOnInteraction: false }}
        loop={true}
        className={styles.customSwiper}
        >
          {banners.map(banner => (
            <SwiperSlide key={banner.id}>
              {banner.type === 'image' ? (
                <Link to={banner.link} aria-label={banner.alt} state={{ scrollTrigger: Date.now() }}>
                  <img
                    src={windowWidth < 600 ? banner.imageMobile : banner.image}
                    alt={banner.alt}
                    className={styles.bannerImage}
                    style={{ cursor: 'pointer' }}
                  />
                </Link>
                ) : (
                  <div className={styles.customBannerContainer}>
                    <banner.component windowWidth={windowWidth}/>
                    </div>
                )}
            </SwiperSlide> 
          ))}
        </Swiper>
    </div>
  );
}      

export default Carousel;
