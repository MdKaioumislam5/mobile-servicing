import React from 'react';
import network from '../../../images/network.png';
import service from '../../../images/service.png';
import setting from '../../../images/setting.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        name: 'Network',
        img: network
    },
    {
        name: 'Service',
        img: service
    },
    {
        name: 'Setting',
        img: setting
    }
]

const Service = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Advanced Services Section</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5 border">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;