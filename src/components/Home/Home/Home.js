import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Testimonials></Testimonials>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};
export default Home;