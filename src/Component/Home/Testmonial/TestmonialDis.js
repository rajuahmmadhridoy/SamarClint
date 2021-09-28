import React from 'react';

const TestmonialDis = ({data}) => {
    const {name,position,description,img,rateings} = data;
    return (
        <div className="col-md-4">
            <div className="testmonialDisInner">
            <p>{description}</p>
            <h1>{name}</h1>
            </div>
        </div>
    );
};

export default TestmonialDis;