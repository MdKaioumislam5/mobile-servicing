import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const AdminPanel = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // data.image = loggedInUser.photoURL;
        console.log("added ", data);
        fetch('http://localhost:5000/addAdminPanel', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('New Admin added successfully');
                    history.push('/dashboard')
                    history.push('/dashboard/adminPanel')

                }
            })












    
    }
    return (
        <div>
            <form className="mt-5 bg-primary p-5" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-white">Add New Admin:</h1>

                <div className="form-group">
                    <h4 className="text-white">Admin Name</h4>
                    <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px', width: '100%' }} placeholder="Enter Your Name" type="text" {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group ">
                    <h4 className="text-white">Email</h4>
                    <textarea className="pt-3 pl-3" style={{ border: '1px solid rgba(10, 10, 10, 0.192)', width: '100%' }} placeholder="Enter Your Email" {...register("email", { required: true })} />
                    {errors.description && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <h4 className="text-white">Password</h4>
                    <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Password" type="password" {...register("password", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="mt-5 btn btn-success">
                    <input style={{ width: '100px', letterSpacing: '2px', padding: '10px' }} type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AdminPanel;