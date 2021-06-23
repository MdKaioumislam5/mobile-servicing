import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({data}) => {
    return (
        <div className="col-md-4 text-center m-3 border bg-info p-5 text-white">
        <FontAwesomeIcon variant="top" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: 'auto', marginTop: '15px', color: 'black' }} icon={faUserCircle} />
        <div className="h-50">
            <h2 className=" m-4 bg-warning p-3">Name:{data?.name}</h2>
            <h4 className="mt-3  p-3">Complement:{data?.complement}</h4>
            <h2 className="mt-5 p-3">Rating:{data?.rating} *</h2>
        </div>
    </div>
    );
};

export default ReviewCard;