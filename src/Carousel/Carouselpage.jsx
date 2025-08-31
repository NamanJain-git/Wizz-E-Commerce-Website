import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../assets/Bannerimg/banner1.jpg";
import banner2 from "../assets/Bannerimg/banner2.jpeg";
import banner3 from "../assets/Bannerimg/banner3.jpeg";

function Carouselfunc() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="first banner" />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="first banner" />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="first banner" />

                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default Carouselfunc