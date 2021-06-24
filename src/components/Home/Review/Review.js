import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
const Review = () => {
    const [review, setReview] = useState([]);
    // console.log('added', review);

    useEffect(() => {
        fetch('https://serene-woodland-17548.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])
    return (
        <section className="services-container mt-5 border">
            <div className="text-center">
                <h1 className="bg-info p-3 mt-5">Customer Reviews</h1>

            </div>
            <div className=" row mt-5 pt-5 border bg-primary d-flex justify-content-center">
                {
                    review.map(data => <ReviewCard data={data} ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Review;