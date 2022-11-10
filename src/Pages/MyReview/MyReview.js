import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../constext/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { Link } from "react-router-dom";
import ReviewRow from './ReviewRow';

const MyReview = () => {
    useTitle('Review')
    const { user } = useContext(AuthContext);
    console.log(user);

    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch(`https://badhons-collection-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete your review?');
        if (proceed) {
            fetch(`https://badhons-collection-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://badhons-collection-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Updated' })


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr._id !== id);
                    const approving = reviews.find(odr => odr._id === id);
                    approving.status = 'Updated'
                    const newReviews = [...remaining, approving];
                    setReviews(newReviews);
                }
            })
    }

    return (
        <div>
            <h2 className="5xl">Review: {reviews.length}</h2>

            {
                reviews.length < 1 ?
                    <h1 className='text-5xl'>No Reviews were added  </h1>
                    : <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <tbody>
                                {
                                    reviews.map(revie => <ReviewRow
                                        key={revie._id}
                                        revie={revie}
                                        handleDelete={handleDelete}
                                        handleStatusUpdate={handleStatusUpdate}
                                    ></ReviewRow>)
                                }
                            </tbody>
                        </table>
                    </div>
            }


        </div>
    );
};

export default MyReview;