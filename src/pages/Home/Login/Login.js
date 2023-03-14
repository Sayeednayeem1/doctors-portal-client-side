import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser } = useContext(AuthContext);
    // todo login error
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message);
            });
    }

    return (
        <div className='h-[600px]  flex justify-center items-center'>
            <div className='w-96  shadow-xl p-6'>
                <h1 className='text-xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role="alert" className='text-orange-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type="password"
                            {...register("password", {
                                required: "password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role="alert" className='text-orange-600'>{errors.password?.message}</p>}
                        <label className="label"> <span className="label-text">Forget Password?</span> </label>
                    </div>

                    <input className='btn btn-accent w-full' type="submit" />
                    {
                        loginError && <p className='text-orange-600'>{loginError}</p>
                    }
                </form>
                <p>New to doctors portal? <Link className='text-primary' to="/signup">Create new account</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;