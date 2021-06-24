import React, { useEffect, useState } from 'react';
import BookingsCard from './BookingsCard';
import { Table } from 'react-bootstrap';


const AllBookings = () => {
    const [service, setService] = useState([]);
    console.log('bookingsData',service);

    useEffect(() => {
        fetch('https://serene-woodland-17548.herokuapp.com/getBookedAbc')
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    let count = 1;
    return (

        <div className="mt-3">

            <h1 className="text-white text-center p-3">All Bookings</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Your Name</th>
                        <th>Email</th>
                        <th>Booking Name</th>
                        <th>Price</th>
                        <th>Booking Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        service.map(products => <BookingsCard count={count++} products={products.Product}
                        ></BookingsCard>)
                    }
                </tbody>
            </Table>



        </div>

    );
};

export default AllBookings;