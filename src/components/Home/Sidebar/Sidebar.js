import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../../App';

const Sidebar = () => {

    return (
        <div>
            <div style={{ height: '100vh' }}>
                <div className="text-dark border h5 p-3 d-flex flex-column h-75 text-white">
                    <Link to="/dashboard/placeOrder" className="mt-4 text-white">Place Order</Link>
                    <Link to="/dashboard/serviceAdd" className="mt-4 text-white">Add Services</Link>
                    <Link to="/dashboard/addReview" className="mt-4 text-white">Add Review </Link>
                    <Link to="" className="mt-4 text-white">All Services</Link>
                    <Link to="/dashboard/allBookings" className="mt-4 text-white">All Bookings</Link>
                    <Link to="/dashboard/adminPanel" className="mt-4 text-white">Add Admin</Link>
                    <Link to="/dashboard/adminList" className="mt-4 text-white">Admin List</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;