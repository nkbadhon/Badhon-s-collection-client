import React from 'react';
import { FaUser } from "react-icons/fa";
const ReviewAll = ({ aa }) => {


    const { name, email, review, photo, uname, } = aa;


    return (
        <div className="card w-full bg-base-100 shadow-xl my-4">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex  justify-between '>
                    {
                        photo ?
                            <img src={photo} alt="" /> : <FaUser></FaUser>
                    }

                    <div className='p-4'>
                        <p > {uname}</p>
                        <p >{email}</p>
                    </div>
                </div>


                <div className="card-actions justify-end mt-4 ">
                    <p className='break-all '><strong>Review:</strong> {review}</p>

                </div>
            </div>
        </div>
    );
};

export default ReviewAll;