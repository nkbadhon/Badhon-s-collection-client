import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from './About/About';
import Biopgraphy from './Biography/Biopgraphy';
import Carousel from './Carousel/Carousel';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <About></About>
            <Biopgraphy></Biopgraphy>

        </div>
    );
};

export default Home;