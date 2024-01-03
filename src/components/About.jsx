import React from 'react';
import '../app/globals.css';
import Test2 from './AboutGpt';

const Ignacio = 'Ignacio'

function home() {
    return (
        <div id='About' className="relative flex items-center justify-center text-center h-[100vh]">
            <div className="mx-auto w-full text-center flex items-center justify-center text-center">
                <div className="text-center w-[60%]">
                    <h1 className="text-gray-900 sm:text-3xl text-center">
                        <Test2 />
                    </h1>
                </div>
            </div>

        </div>

    )
}

export default home;