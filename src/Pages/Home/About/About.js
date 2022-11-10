import React from 'react';
import aboutimg from '../../../Images/about/about.jpg'
const About = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-6">
            <figure><img src={aboutimg} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Our Payment Gateway</h2>
                <p>Here are a lot of payment system in my website. You can parchase any service from anywhere in the world.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Pay</button>
                </div>
            </div>
        </div>
    );
};

export default About;