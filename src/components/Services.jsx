import React from 'react';

function Services() {
    return (
        <div className=' mx-auto p-4 w-full  h-[100vh] bg-black '>
            <h2 className='text-3xl font-bold mb-6 text-white'>My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h3 className='text-xl font-semibold mb-2'>Web Development</h3>
                    <p>Full stack web development using React, Node.js, and Express</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h3 className='text-xl font-semibold mb-2'>Mobile Development</h3>
                    <p>Mobile app development using React Native</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h3 className='text-xl font-semibold mb-2'>API Development</h3>
                    <p>RESTful API development using Node.js and Express</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md '>
                    <h3 className='text-xl font-semibold mb-2'>Database Development</h3>
                    <p>Database development using MongoDB and MySQL</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
