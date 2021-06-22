import React, { useEffect, useState } from 'react';
import network from '../../../images/network.png';
import service from '../../../images/service.png';
import setting from '../../../images/setting.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';



const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getServices')
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    return (
        <section className="services-container mt-5 border">
            <div className="text-center">
                <h1 className="bg-warning p-3 mt-5">OUR SERVICES</h1>
              
            </div>
            <div className=" row mt-5 pt-5 border bg-success d-flex justify-content-center">
                {
                    service.map(service => <ServiceDetail services={service} ></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Service;