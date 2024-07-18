import React from 'react';
import Banner from './Banner';
import About from './About';
import ServiceSection from './ServiceSection';

const HomePage = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default HomePage;