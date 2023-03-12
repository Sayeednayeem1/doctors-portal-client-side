import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section className='mt-16'>
            <div className='shadow-xl py-12'>
                <div className='text-center'>
                    <h1 className='text-2xl text-primary'>Contact Us</h1>
                    <p className='text-3xl'>Stay Connected With Us</p>
                </div>
                <div className='flex justify-center mt-8'>
                    <div>
                        <input type="text" placeholder="Email Address" className="input input-bordered w-full  max-w-sm mb-2" />
                        <br />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-sm mb-2" />
                        <br />
                        <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                        <PrimaryButton>Getting Started</PrimaryButton>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;