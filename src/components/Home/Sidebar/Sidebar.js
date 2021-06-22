import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../../App';

const Sidebar = () => {

    return (
        <div>
            <div style={{ height: '100vh' }}>
                <div className="text-dark border h5 p-3 d-flex flex-column h-75">
                    <Link to="/dashboard/serviceAdd" className="mt-4">Add Services</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;