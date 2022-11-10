import React from 'react';


const Blog = () => {
    return (

        <div>
            <div className=' my-4 text-2xl'>
                <h4><strong>Question: </strong>What are the difference between SQL and NoSQL?</h4>
                <p> <strong>Answer: </strong>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className=' my-4 text-2xl'>
                <h4><strong>Question: </strong>What is JWT, and how does it work?</h4>
                <p> <strong>Answer: </strong>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
            </div>
            <div className=' my-4 text-2xl'>
                <h4><strong>Question: </strong>What is the difference between javascript and Node JS?</h4>
                <p> <strong>Answer: </strong>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className=' my-4 text-2xl'>
                <h4><strong>Question: </strong>How does Node JS handle multiple requests at the same time?</h4>
                <p> <strong>Answer: </strong>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>


        </div>

    );
};

export default Blog;