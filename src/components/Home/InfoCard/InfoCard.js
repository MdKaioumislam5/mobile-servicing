import React from 'react';
import './InfoCard.css';


const InfoCard = ({ info }) => {
    return (
        <div className=" col-md-4 text-dark info-card">
            <div className="justify-content-center"  >
                <div className="mr-3">
                    <img src={info.image} className="img-fluid" alt="" />
                </div>
                <div className="infoCard">
                    <h5>{info.title}</h5>
                    <h6>{info.description}</h6>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
