import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, refetch, selectedDate, setTreatment }) => {
    let { name: treatmentName, slots } = treatment;
    let { user } = useContext(AuthContext);

    const date = format(selectedDate, "PP");

    let handleBooking = event => {
        event.preventDefault();
        let form = event.target;
        let name = form.name.value;
        let phone = form.phone.value;
        let email = form.email.value;
        let slot = form.slot.value;
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            phone,
            email,
            slot
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='mt-8 grid grid-cols-1 gap-6'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, x) => <option value={slot} key={x}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email Address" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;