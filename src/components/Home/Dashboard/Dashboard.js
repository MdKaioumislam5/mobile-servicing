import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import ServiceAdd from '../Service/ServiceAdd';
// import Sidebar from '../Sidebar/Sidebar';
// import './Dashboard.css';
// import AddProduct from '../../allServices/AddService';
import Sidebar from '../Sidebar/Sidebar';



const Dashboard = () => {
    return (
        <div>

            <Router>

                <div className="d-flex">

                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>

                    <div className="col-md-10">
                        <Switch>

                            <Route path="/dashboard/serviceAdd">
                                <ServiceAdd></ServiceAdd>
                            </Route>

                        </Switch>

                    </div>

                </div>

            </Router>
        </div>
    );
};

export default Dashboard;