import React from 'react';
import './Testimonials.css';
import kaiyum from '../../../images/kaiyum.png';
import farhan from '../../../images/farhan.png';
import jovan from '../../../images/jovan.png';
import Testimonial from '../Testimonial/Testimonial';
const testimonialData = [
    {
        img : kaiyum,
        name : 'Kaiyum',
        from : 'California',
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! '     
    },
    {
        img : farhan,
        name : 'Farhan',
        from : 'California',
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ' 
    },
    {
        img : jovan,
        name : 'Jovan',
        from : 'California',
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! '
    }
]

const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>Feature You”ll Love <br/> Says </h1>
               </div>
               <div className="card d-flex col-md-4">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}Testimonial/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;