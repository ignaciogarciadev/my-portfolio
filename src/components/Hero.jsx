import React from 'react';
import '../app/globals.css';
import Test from './HeroGpt';

function home() {
    
    return (
        <div id='Hero' className="relative flex items-center justify-center h-[100vh]">
            <div className="mx-auto w-full">
                <div className="text-center">
                    <h1 className="text-gray-900 sm:text-3xl">
                        <Test/>
                    </h1>
                </div>
            </div>
        
        </div>

    )
}

export default home;