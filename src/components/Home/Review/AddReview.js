import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

// import { userContext } from '../../App';

const ServiceAdd = () => {
    const history = useHistory();
    // const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // data.image = loggedInUser.photoURL;
        console.log("added ", data);

        fetch('https://serene-woodland-17548.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Your Review added successfully');
                    history.push('/dashboard')
                    history.push('/dashboard/addReview')
                }
            })

    }
    return (
        <div>
            <form className="mt-5 bg-primary p-5" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-white">Add New Review YY</h1>

                <div className="form-group">
                    <h4 className="text-white">Reviewers Name</h4>
                    <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' , width: '100%' }} placeholder="Enter Your Name" type="text" {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group ">
                    <h4 className="text-white">Complement</h4>
                    <textarea className="pt-3 pl-3" style={{ border: '1px solid rgba(10, 10, 10, 0.192)', width: '100%' }} placeholder="Enter Your Complement" {...register("complement", { required: true })} />
                    {errors.description && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <h4 className="text-white">Rating 1-5</h4>
                    <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Number 1-5" type="text" {...register("rating", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="mt-5 btn btn-success">
                    <input style={{ width: '100px', letterSpacing: '2px', padding: '10px'  }} type="submit" />
                </div>
            </form>
        </div>
    );
};

export default ServiceAdd;