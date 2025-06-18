// src/components/Carousel/Carousel.jsx
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './carousel.module.css'

import banner from '../../assets/banners/Banner-ED-AR.png'
import bannerMobile from '../../assets/banners/Banner-ED-AR-mobile.png'

export default function Carousel() {

    const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTamanhoTela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className={styles.customSwiper}
      >
        <SwiperSlide>
          <img
            src={tamanhoTela < 600 ? bannerMobile : banner}
            alt='Banner de los productos'
            className={styles.bannerImage}
            onClick={() => window.open('/productos', '_self')}
            style={{ cursor: 'pointer' }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
