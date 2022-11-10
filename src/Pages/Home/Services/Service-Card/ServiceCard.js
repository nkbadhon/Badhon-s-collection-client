import React from 'react';
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';




const ServiceCard = ({ serv }) => {

    const { _id, name, price, description, photo_url } = serv;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div >

                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                    <PhotoView src={photo_url}>
                        <img className='h-72' src={photo_url} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 300)}...</p>

                <div className="card-actions justify-end mt-4">
                    <p>Price: ${price}</p>
                    <Link to={`/eachdetails/${_id}`}><button className="btn btn-primary">Service Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

