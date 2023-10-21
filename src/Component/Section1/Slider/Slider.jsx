import React from 'react'
import Slider from "react-slick";
import img1 from '../../../assets/icons/Nestle.svg'
import img2 from '../../../assets/icons/Apple_logo_black.svg'
import img3 from '../../../assets/icons/Frame.svg'
import img4 from '../../../assets/icons/Amazon_logo.svg'
import img5 from '../../../assets/icons/Google.svg'
import img6 from '../../../assets/icons/Walmart_logo.svg'
import './style.scss'
const MySlider = () => {
    const data = [img1, img2, img3, img4, img5, img6, img1]
    const setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
    }

    return (
        <>
            <div className="Myslider-wrapper">
                <Slider {...setting}>
                    {data.map((val, key) => {
                        return <div key={key} className='img-wrap'><img src={val} alt="img" /></div>
                    })}
                </Slider>
                {/* <Swiper
                {...setting}>
                {data.map((val, key) => {
                    return <SwiperSlide key={key}><img src={val} alt="img" /></SwiperSlide>
                })}
                
            </Swiper> */}
            </div>
        </>
    )
}

export default MySlider
