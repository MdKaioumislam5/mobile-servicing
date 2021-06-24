import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTools, faUserAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ServiceDetail = ({ services }) => {
    const id = services._id;
    // console.log('product id', id);
    // console.log(services);
    return (
        <div className="col-md-4 text-center m-3 border bg-info p-5 text-white">
            <FontAwesomeIcon variant="top" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: 'auto', marginTop: '15px' }} icon={faTools} />
            <div className="h-50">
                <h2 className=" m-4 bg-danger p-3">{services?.serviceName}</h2>
                <h4 className="mt-3  p-3">{services?.description}</h4>
                <h2 className="mt-3 m-3 p-3">Price:{services?.price} $</h2>
            </div>
            <Link to={`/dashboard/placeOrder/${id}`} variant="primary"> <button className="btn btn-primary" type=""> Click To Book</button> </Link>
        </div>
    );
};

export default ServiceDetail;