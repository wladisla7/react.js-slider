import React, { useEffect, useState } from "react";
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

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide() {
        setCurrentSlide((prevSlide) => {
            return prevSlide + 1
        });
    }


    function prevSlide() {
        setCurrentSlide((prevSlide) => {
            return prevSlide - 1
        });
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % arrayImages.length);

            console.log(currentSlide);
        }, 2000);

        return () => {
            clearInterval(intervalID);
        };
    }, [currentSlide]);
    return (
        <div>
            <div className="options">
                <button>sliderShow</button>
                <input type="number" placeholder="deley" />
                <button>fullScreen</button>
            </div>
            <div className="display">
                <button onClick={prevSlide}>Prev</button>
                <img src={arrayImages[currentSlide]} alt="" />
                <button onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
}