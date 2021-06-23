import React from 'react';

const Testimonial = (props) => {
    const { quote, name, from, img } = props.testimonial;
    return (
        <div style={{width:'350px'}} className=" shadow-sm bg-info m-3">
            <div className="card-body">
                <div className="card-footer">
                    <img className="text-item-center" src={img} alt="" width="60" />
                    {/* <div className="card-main"> */}
                        <h6 className="text-primary">{name}</h6>
                        <p className="">{from}</p>
                        <p className="">{quote}</p>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;