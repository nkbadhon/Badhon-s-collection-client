import React, { useEffect, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';
import ServiceCard from '../Service-Card/ServiceCard';



const AllServices = () => {
    useTitle('All Services')
    const [ser, setSer] = useState([]);
    useEffect(() => {

        fetch('https://badhons-collection-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setSer(data))

    }, [])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4'>
            {

                ser.map(serv => <ServiceCard
                    key={serv._id}
                    serv={serv}
                ></ServiceCard>)

            }


        </div>
    );
};

export default AllServices;