import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ExceptionalDentalCare = () => {
    return (
        <div className='mt-14'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="lg:w-[476px] lg:h-[476px] rounded-lg shadow-2xl lg:mr-24" alt='' />
                    <div>
                        <h1 className="text-2xl font-bold">Exceptional Dental Care.</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Getting Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalDentalCare;