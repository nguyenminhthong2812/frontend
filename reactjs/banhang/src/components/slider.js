import React from 'react';
import Carousel from '../../node_modules/react-bootstrap/Carousel';

const Slider = () => {
    return (        
        <div id="demo" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
                <li data-target="#demo" data-slide-to={2} />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require('../imgs/chicago.jpg')} width="100%" alt="Los Angeles" />
                </div>
                <div className="carousel-item">
                    <img src={require('../imgs/la.jpg')} width="100%" alt="Chicago" />
                </div>
                <div className="carousel-item">
                    <img src={require('../imgs/ny.jpg')} width="100%" alt="New York" />
                </div>
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>
    );
}

export default Slider;