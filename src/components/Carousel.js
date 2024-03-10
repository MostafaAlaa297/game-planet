import React, { useState } from "react";
import { SliderData } from "./SliderData";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Carousel = ({ slides }) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0  : current + 1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}

if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

    return (
        <div>
            <h1 className="carousel-title">featured games</h1>
            <div className="slider">
                {SliderData.map((slide, index) => {
                    return (
                        <div id={index === current ? "image" : "image"} className="active" key={index}>
                            {
                                index === current && (<img src={slide.image} alt="game image" id="image" />
                            )}
                        </div>
                        ) 
                })}
                <button onClick={nextSlide} id="right_arrow" className="rightArrow">
                    <ArrowForwardIosRoundedIcon className="arrow" />
                </button>
                <button onClick={prevSlide} id="left_arrow" className="leftArrow">
                    <ArrowBackIosIcon className="arrow" />
                </button>
            </div>
        </div>    
    );
}

export default Carousel;