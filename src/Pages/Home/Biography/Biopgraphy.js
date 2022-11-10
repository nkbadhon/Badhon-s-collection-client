import React from 'react';
import Bio from '../../../Images/Biography/Me.jpg'
const Biopgraphy = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-6">

            <div className='w-1/3'><figure><img src={Bio} alt="Album" /></figure></div>
            <div className="card-body">
                <h2 className="card-title text-teal-900">Author</h2>
                <p className='text-xl'><strong >Nudunnabi Khan Badhon</strong> is a junior web developer and doing this mesmerizing job for one year. He has completed his undergraduation from BRAC University. Currently he is enjoying his life!!! </p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default Biopgraphy;