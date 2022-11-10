import React from 'react';
import Bio from '../../../Images/Biography/Me.jpg'
const Biopgraphy = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-6">

            <div className='w-1/3'><figure><img src={Bio} alt="Album" /></figure></div>
            <div className="card-body">
                <h2 className="card-title">Author</h2>
                <p>Assalamu Alaikum</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Pay</button>
                </div>
            </div>
        </div>
    );
};

export default Biopgraphy;