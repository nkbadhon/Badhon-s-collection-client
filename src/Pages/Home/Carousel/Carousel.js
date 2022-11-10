import React from 'react';
import im1 from '../../../Images/Carousel/1.jpg';
import im2 from '../../../Images/Carousel/2.jpg';
import im3 from '../../../Images/Carousel/3.jpg';
import './Carousel.css';


const Carousel = () => {
    return (
        <div className="carousel w-full pb-16 ">
            <div id="slide1" className="carousel-item relative w-full h-1/2">
                <div className='carosel-img'><img src={im1} className="w-full " alt='' /></div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='md:text-lg lg:text-6xl font-bold text white'>
                        Affordable <br />
                        price for <br />
                        photgraphy
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carosel-img w-full h-full'><img src={im2} className="w-full" alt='' /></div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text white'>
                        Affordable <br />
                        price for <br />
                        photgraphy
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                    <button className="btn btn-warning mr-5">Warning</button>
                    <button className="btn btn-outline btn-warning">Warning</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='carosel-img w-full h-full'><img src={im3} className="w-full" alt='' /></div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text white'>
                        Affordable <br />
                        price for <br />
                        photgraphy
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                    <button className="btn btn-warning mr-5">Warning</button>
                    <button className="btn btn-outline btn-warning">Warning</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Carousel;