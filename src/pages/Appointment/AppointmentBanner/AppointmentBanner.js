import React from 'react';
import banner from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="md:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='mr-8'>
                        <DayPicker

                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}

                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;