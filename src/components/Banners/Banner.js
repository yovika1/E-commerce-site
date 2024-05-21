import React from 'react';
import Slider from 'react-slick';
import bannerData from '../../Data/BannerData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="absolute top-1/2 start-0 z-30 transform -translate-y-1/2 cursor-pointer focus:outline-none"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faAngleLeft} className=' ml-6 border-2 rounded border-black'/>
    {/* <span className="text-white">Previous</span> */}
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    className="absolute top-1/2 end-0 z-30 transform -translate-y-1/2 cursor-pointer focus:outline-none"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faAngleRight} className=' mr-6 border-2 rounded border-black' />
    {/* <span className="text-white "></span> */}
  </button>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    
  };

  return (

    <div className="relative w-full h-1 mr-20 size-20 mt-6 md:h-96">
      <Slider {...settings}>
        {bannerData.map((item, index) => (
          <div key={index}>
            <img
              src={item.imgUrl}
              alt={item.alt}
            //   className= "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
