import React from 'react'
import { Redirect, Route } from 'react-router';

function PrivateRoute({ component, ...routeProps }) {
    const profile = false;

    if (!profile) {
        return <Redirect to='/signin' />
    }
    return (
        <div>
            <h1>Private rOUTE</h1>
            <Route {...routeProps} component={component} />
        </div>
    )
}

export default PrivateRoute;
