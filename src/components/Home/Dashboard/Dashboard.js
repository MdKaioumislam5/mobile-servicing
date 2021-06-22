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
import AddReview from '../Review/AddReview';
import AddAdmin from '../Admin/AddAdmin';
const Dashboard = () => {
    return (
        <div>
            <Router>

                <div className="d-flex">

                    <div className="col-md-2 bg-danger">
                        <Sidebar></Sidebar>
                    </div>

                    <div className="col-md-10 bg-info">
                        <Switch>
                            <Route path="/dashboard/serviceAdd">
                                <ServiceAdd></ServiceAdd>
                            </Route>
                            <Route path="/dashboard/addReview">
                                <AddReview></AddReview>
                            </Route>
                            <Route path="">
                                <AddReview></AddReview>
                            </Route>
                            <Route path="">
                                <AddReview></AddReview>
                            </Route>
                            <Route path="/dashboard/addAdmin">
                                <AddAdmin></AddAdmin>
                            </Route>
                        </Switch>

                    </div>

                </div>

            </Router>
        </div>
    );
};

export default Dashboard;