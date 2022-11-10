import React, { useEffect, useState } from 'react';
import ServiceCard from './Service-Card/ServiceCard';
import { Link } from "react-router-dom";
const Services = () => {

    const [ser, setSer] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setSer(data))

    }, [])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {

                ser.map(serv => <ServiceCard
                    key={serv._id}
                    serv={serv}
                ></ServiceCard>)

            }

            <Link to='/allservices'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">See All Services</button></Link>
        </div>
    );
};

export default Services;