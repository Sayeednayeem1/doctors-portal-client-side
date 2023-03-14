import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const ReactLoader = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-grow justify-center items-center'>
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                />
            </div>
        </div>
    );
};

export default ReactLoader;
