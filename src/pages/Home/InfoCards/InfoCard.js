import React from 'react';

const InfoCard = ({ card }) => {
    const { name, details, icon, bgClass } = card;
    return (
        <div>
            <div className={`card card-side shadow-xl p-6 text-white ${bgClass}`}>
                <figure>
                    <img src={icon} alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;