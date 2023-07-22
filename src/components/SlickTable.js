import React from "react";
import Slider from "react-slick";
import './SlickTable.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function SlickTable() {
    const images = require.context('./localData/images/', true);
    const imageList = images.keys().map(image => images(image));
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='slicktable'>
            <Slider {...settings}>
                
                    {imageList.map((image,index)=>(
                        <div>
                        <img key={index} src={image} alt={index} class="img-resize"/>
                        </div>
                    ))}
                
            </Slider>
        </div>
    );
}