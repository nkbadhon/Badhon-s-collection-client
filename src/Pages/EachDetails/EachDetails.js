import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../constext/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewAll from './ReviewAll';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const EachDetails = () => {
    useTitle('Details')
    const { _id, name, price, description, photo_url } = useLoaderData();



    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const uname = form.uname.value;

        const reviews = {
            service: _id,
            name: name,
            email: email,
            review: review,
            photo: photo,
            uname: uname


        }


        fetch('https://badhons-collection-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added successfully');
                    form.reset();

                }
            }

            )
            .catch(error => console.error(error));
    }

    const [aaa, setAaa] = useState([]);
    useEffect(() => {

        fetch('https://badhons-collection-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setAaa(data))

    }, [])

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">

                <div >
                    <figure><PhotoProvider speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                        <PhotoView src={photo_url}>
                            <img className='h-72' src={photo_url} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className="card-actions justify-end mt-4">
                        <p>Price: ${price}</p>
                    </div>
                </div>
            </div>

            <div className='my-6 bg-base-100 border-2'>
                <h1 className='text-amber-500 text-center font-bold text-xl'>All Review :</h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    {

                        aaa.map(aa => <ReviewAll
                            key={aa._id}
                            aa={aa}
                        ></ReviewAll>)

                    }
                </div>
            </div>
            <div className='my-6 bg-base-100 border-2'>
                <h1 className='text-amber-500 text-center font-bold text-xl'>Add Your Review :</h1>
                <form onSubmit={handleReview}>
                    <div><input name="review" type="text" placeholder="Add a review" className="h-24 input input-bordered w-full my-2" />
                    </div>
                    <div>
                        <input name="email" type="text" placeholder="Mail" defaultValue={user?.email} className=" input input-bordered w-full mb-2" />
                        <input name="photo" type="text" placeholder="photo" defaultValue={user?.photoURL} className=" input input-bordered w-full mb-2 hidden" />
                        <input name="uname" type="text" placeholder="name" defaultValue={user?.displayName} className=" input input-bordered w-full mb-2 hidden" />
                    </div>
                    <input className='btn btn-primary w-24  mb-2' type="Submit" defaultValue='Add' />

                </form>
            </div>
        </div>
    );
};

export default EachDetails;