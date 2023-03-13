import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    let { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='mt-8 grid grid-cols-1 gap-6'>
                        <input type="text" value={format(selectedDate, "PP")} disabled className="input input-bordered w-full" />
                        <select className="select select-bordered w-full">
                            {
                                slots.map(slot => <option selected value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;