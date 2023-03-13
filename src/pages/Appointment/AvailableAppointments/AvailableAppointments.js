import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {

    let [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data));
    }, [])

    return (
        <section className='mt-16'>
            <h1 className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                    ></AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;