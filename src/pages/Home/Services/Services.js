import React from 'react';
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        },
        {
            id: 2,
            name: "Cavity Filling",
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
            bgClass: "bg-accent"
        },
        {
            id: 3,
            name: "Teeth WHitening",
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h4 className='text-2xl font-bold text-secondary '>OUR SERVICES</h4>
                <h5 className='text-3xl'>Services we provide</h5>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;