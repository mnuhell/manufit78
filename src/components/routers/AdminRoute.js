import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminScreen from '../AdminScreen';


const AdminRoute = () => {

    return (
        <Switch>
            <Route exact to="/admin/home" component={AdminScreen} />

            <Redirect to="/auth/login" />
        </Switch>
    )
}

export default AdminRoute;