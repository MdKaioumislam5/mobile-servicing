import React from 'react';

const AllServicesCard = (props) => {

    // console.log('all service card',props.products);
    return (

        <tr>
            <td>{props?.count}</td>
            <td>{props?.products?.serviceName}</td>
            <td>{props?.products?.price}</td>
            <td>First Admin</td>
            <td>
                <button className="btn btn-primary">Delete</button>
            </td>
        </tr>

    );
};

export default AllServicesCard;