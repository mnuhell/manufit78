import React from 'react';
import { Route } from 'react-router-dom';
import AdminScreen from '../AdminScreen';


const AdminRoute = () => {

    return (
        <Route exact to="/admin" component={AdminScreen} />
    )
}

export default AdminRoute;