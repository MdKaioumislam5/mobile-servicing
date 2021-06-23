import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        image: 'https://i.ibb.co/qgSNNhT/ios.jpg',
        title: 'Apple IOS Device',
        description: 'We are open 7 days',
       
    },
    {
        image: 'https://i.ibb.co/9VKPFkT/android.jpg',
        title: 'Android Device',
        description: 'We are open 7 days',
        
    },
    {
        image: 'https://i.ibb.co/hLChZy7/anything.jpg',
        title: 'Anything Device',
        description: 'We are open 7 days',
       
    }
]
const BusinessInfo = () => {
    return (
        <section className="justify-content-center mt-5">
              <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Projects</h5>
                <h2>First Repair Your Smart Phone</h2>
            </div>
            <div className="w-75 m-auto row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;

