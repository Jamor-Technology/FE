import React, { useState, useEffect } from 'react';
import './ImageBanner.css';

import bannerImage1 from '../../assets/images/banner-image1.png';
import bannerImage2 from '../../assets/images/banner-image2.png';
import bannerImage3 from '../../assets/images/banner-image3.png';
import bannerImage4 from '../../assets/images/banner-image4.png';
import bannerImage5 from '../../assets/images/banner-image5.png';

const ImageBanner = () => {
  const [variant, setVariant] = useState('default');

  // Use effect to toggle the variant between 'default' and 'reduced' every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVariant(prevVariant => (prevVariant === 'default' ? 'reduced' : 'default'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`banner-container ${variant}`}>
        <img src={bannerImage1} alt='banner1' className='image image1'/>
        <img src={bannerImage2} alt='banner2' className='image image2'/>
        <img src={bannerImage3} alt='banner3' className='image image3'/>
        <img src={bannerImage4} alt='banner4' className='image image4'/>
        <img src={bannerImage5} alt='banner5' className='image image5'/>
    </div>
  );
}

export default ImageBanner;
