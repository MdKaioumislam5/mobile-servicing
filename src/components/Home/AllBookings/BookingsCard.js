import React from 'react';

const BookingsCard = (props) => {
    console.log(props);
    return (
        <tr>
            <td>{props?.count}</td>
            <td>Kaiyum</td>
            <td>jashore4@gmail.com</td>
            <td>{props?.products?.serviceName}</td>
            <td>{props?.products?.price}</td>
            <td>{props?.products?.orderDate}</td>
        </tr>
    );
};

export default BookingsCard;