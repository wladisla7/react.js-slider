import React, { useState } from "react";
import './slider.css'
import SliderShow from '../../components/SliderShow'
import FullScreen from '../../components/FullScreen'
import firstimg from '../../assets/images/11.png';
import secondimg from '../../assets/images/12.png';
import thirdimg from '../../assets/images/13.png';
import fourimg from '../../assets/images/14.png';
import fiveimg from '../../assets/images/15.png';


const arrayImages = [
    firstimg,
    secondimg,
    thirdimg,
    fourimg,
    fiveimg,
];

export default function Slider(props) {
    const [currentSlide, setCurrentSlide] = useState(0);



    function nextSlide() {
        setCurrentSlide((prevSlide) => {
            return (prevSlide + 1) % arrayImages.length
        });
    }

    function prevSlide() {
        setCurrentSlide((prevSlide) => {
            return (prevSlide - 1 + arrayImages.length) % arrayImages.length;

        });
    }

    return (
        <div>
            <div className="options">
                <SliderShow action={nextSlide} />
                <FullScreen />
            </div>
            <div className="display">
                <button className="prevSlide" onClick={prevSlide}> {'<<<'} </button>
                <img src={arrayImages[currentSlide]} alt="Slider" />
                <button className="nextSlide" onClick={nextSlide}>{'>>>'}</button>
            </div>
        </div>
    );
}
//SlideShow