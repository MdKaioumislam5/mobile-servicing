import React from 'react';

const ServiceDetail = ({ service }) => {
    fetch('http://localhost:5000/addBookings',{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(success => {
        if(success){
            alert('Bookings created successfully');
        }
    })
    return (
        <div className="col-md-4 text-center m-3 border">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
        </div>
    );
};

export default ServiceDetail;