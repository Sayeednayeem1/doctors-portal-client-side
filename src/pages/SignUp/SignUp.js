import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [registrationError, setRegistrationError] = useState('');


    const handleSignup = data => {
        console.log(data);
        setRegistrationError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("User created successfully");
                const userInfo = {
                    displayName: data.name
                };
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.error(error));
            })
            .catch(error => {
                console.error(error.message);
                setRegistrationError(error.message)
            });
    }

    return (
        <div>
            <div className='h-[600px]  flex justify-center items-center'>
                <div className='w-96  shadow-xl p-6'>
                    <h1 className='text-xl text-center'>Signup</h1>
                    <form onSubmit={handleSubmit(handleSignup)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Your Name</span> </label>
                            <input type="text"
                                {...register("name", {
                                    required: "Name is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p role="alert" className='text-orange-600'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span> </label>
                            <input type="email"
                                {...register("email", {
                                    required: "Email is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p role="alert" className='text-orange-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label"> <span className="label-text">Password</span> </label>
                            <input type="password"
                                {...register("password", {
                                    required: "password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                                    pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password Must Be Strong" }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p role="alert" className='text-orange-600'>{errors.password?.message}</p>}
                        </div>

                        <input className='btn btn-accent w-full' type="submit" />
                        {
                            registrationError && <p className='text-orange-600'>{registrationError}</p>
                        }
                    </form>
                    <p>Already have an account? <Link className='text-primary' to="/login">Please Login</Link></p>
                    <div className='divider'>OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;