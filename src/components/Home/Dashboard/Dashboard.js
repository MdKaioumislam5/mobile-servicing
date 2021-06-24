import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import ServiceAdd from '../Service/ServiceAdd';
import Sidebar from '../Sidebar/Sidebar';
import AddReview from '../Review/AddReview';
import AdminPanel from '../Admin/AdminPanel';
import Admin from '../Admin/Admin';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import AllBookings from '../AllBookings/AllBookings';
import AllServices from '../Service/AllServices';
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

                            <Route path="/dashboard/placeOrder/:id">
                                <PlaceOrder></PlaceOrder>
                            </Route>
                            <Route path="/dashboard/serviceAdd">
                                <ServiceAdd></ServiceAdd>
                            </Route>
                            <Route path="/dashboard/addReview">
                                <AddReview></AddReview>
                            </Route>
                            <Route path="/dashboard/adminPanel">
                                <AdminPanel></AdminPanel>
                            </Route>
                            <Route path="/dashboard/adminList">
                                <Admin></Admin>
                            </Route>
                            <Route path="/dashboard/allBookings">
                                <AllBookings></AllBookings>
                            </Route>
                            <Route path="/dashboard/allServices">
                                <AllServices></AllServices>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Dashboard;