import React, { useContext, useState } from 'react';
import { AuthContext } from '../../constext/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";

const ReviewRow = ({ revie, handleDelete, handleStatusUpdate }) => {
    const { user } = useContext(AuthContext);
    console.log("orginal", user)

    const { name, email, review, _id, status } = revie;

    return (
        <div>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL} alt="" /> : <FaUser></FaUser>
                                }

                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>

                        </div>
                    </div>
                </td>
                <td>
                    {email}
                    <br />
                    <span className="badge badge-ghost badge-sm">{email}</span>
                </td>
                <td>{review}</td>
                <th>
                    <button
                        onClick={() => handleStatusUpdate(_id)}
                        className="btn btn-ghost btn-xs">{status ? status : 'update'}</button>
                </th>
            </tr>

        </div>
    );
};

export default ReviewRow;