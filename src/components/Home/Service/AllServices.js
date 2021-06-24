import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';
import { Table } from 'react-bootstrap';


const AllServices = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://serene-woodland-17548.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setService(data);
            })
    }, [])
    console.log('all services',service);
    let count = 1;
    return (
       
        <div className="mt-3">

            <h1 className="text-white text-center p-3">All Bookings</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Service Added By</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        service.map(products => <AllServicesCard count={count++} products={products}
                        ></AllServicesCard>)
                    }
                </tbody>
            </Table>

        </div>

    );
};

export default AllServices;