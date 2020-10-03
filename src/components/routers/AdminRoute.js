import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminScreen from '../AdminScreen';
import { AdminPosts } from '../admin/AdminPosts';


const AdminRoute = () => {

    return (
        <Switch>
            <Route exact to="/admin/home" component={AdminScreen} />

            <Route exact to="/admin/posts" component={AdminPosts} />

            <Redirect to="/auth/login" />
        </Switch>
    )
}

export default AdminRoute;