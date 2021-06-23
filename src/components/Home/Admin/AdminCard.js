import React from 'react';

const AdminCard = ({ data }) => {
    // console.log('adminCard', data);
    return (

        <tr>
            <td>#</td>
            <td>{data?.name}</td>
            <td>{data?.email}</td>
            <td>{data?.password}</td>
        </tr>

    );
};

export default AdminCard;