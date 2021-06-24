import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

// import { userContext } from '../../../App';

const PlaceOrder = () => {
    const history = useHistory();
    const { id } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://serene-woodland-17548.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const booking = services.find(service => service._id === id);
    // console.log("ID ", booking);

    const handleCheckOut = () => {
        console.log("place order successfully");
        const orderDate = new Date().toLocaleString();
        booking.orderDate = orderDate;
        const oderDetails = { Product: booking };
        fetch('https://serene-woodland-17548.herokuapp.com/addBookedAbc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(oderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('Your Order Placed successfully');
                    history.push('/dashboard')
                    history.push('dashboard/placeOrder')
                }
            })
    }

    return (
        <div className="mt-5 mb-5 border">
            <div className="d-flex flex-wrap justify-content-around align-items-center" style={{ marginTop: '5px' }}>

                <div className="col-md-3 border">
                    <h2 className="text-center p-3">Booking Information</h2>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Your Name</th>
                                <th>Booking Service</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>User Name</td>
                                <td>{booking?.serviceName}</td>
                                <td>{booking?.price}</td>
                            </tr>
                        </tbody>
                    </Table>

                    {
                    booking &&
                    <button onClick={() => { handleCheckOut() }} className="btn d-flex justify-content-center m-auto btn-primary" type="">Place Order</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;