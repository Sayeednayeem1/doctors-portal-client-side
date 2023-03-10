import React from 'react';

const Review = ({ review }) => {

    const { name, city, description, image } = review;

    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                    <div className="flex items-center mt-6">
                        <div className="avatar mr-6">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} alt='' />
                            </div>
                        </div>
                        <div>
                            <h5 className="text-lg">{name}</h5>
                            <h4 className="">{city}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;