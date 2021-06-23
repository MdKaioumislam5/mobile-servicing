import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AdminCard from './AdminCard';

const Admin = () => {
    const [admin, setAdmin] = useState([]);
    // console.log('added', admin);

    useEffect(() => {
        fetch('http://localhost:5000/getAdminPanel')
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
            })
    }, [])
    return (

        <div className="text-center text-white bg-dark p-5">
            <h1>All Admin List:</h1>
            <Table striped bordered hover variant="info">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Admin Name</th>
                        <th>Admin Email</th>
                        <th>Admin Password</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        admin.map(data => <AdminCard data={data}></AdminCard>)
                    }

                </tbody>
            </Table>
        </div>

    );
};

export default Admin;