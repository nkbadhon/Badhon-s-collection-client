import React, { useContext } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../constext/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const AddService = () => {
    const { user } = useContext(AuthContext);
    useTitle('AddServices');

    const handleAddServices = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || "unregistered";
        const servicename = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        console.log(email, servicename, description);

        const service = {

            name: servicename,
            price,
            description
        }

        fetch('https://badhons-collection-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service added successfully')
                    form.reset();

                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div>
            <h2 className='text-5xl text-center my-5 text-teal-600 font-bold'>Add your Services</h2>
            <form onSubmit={handleAddServices}>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                    <input name='name' type="text" placeholder="Your service name" className="input input-ghost w-full input-bordered" required />
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                    <input name='price' type="text" placeholder="Service price" className=" mb-2 input input-ghost w-full input-bordered" />
                </div>
                <textarea name='description' className=" textarea textarea-bordered h-24 w-full" placeholder="Your Service Details" required></textarea>

                <input className='btn btn-teal-600 w-full my-3' type="submit" value="Add" />
            </form>
            {/* <ToastContainer /> */}
        </div>
    );
};
export default AddService;