import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl text-center font-bold text-secondary">{name}</h2>
                    <p className='text-center'>{slots.length > 0 ? slots[0] : "No slots available today"}</p>
                    <p className='text-center'>{slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE</p>
                    <div className="card-actions justify-center">
                        <label htmlFor="booking-modal"
                            className="btn  btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold"
                            onClick={() => setTreatment(appointmentOption)}
                        >BOOK APPOINTMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;