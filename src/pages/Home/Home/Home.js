import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import ExceptionalDentalCare from '../ExceptionalDentalCare/ExceptionalDentalCare';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <Services />
            <ExceptionalDentalCare />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;