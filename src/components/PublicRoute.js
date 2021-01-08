import React from 'react'
import { Redirect, Route } from 'react-router';

function PublicRoute({ component, ...routeProps }) {
    const profile = false;

    if (profile) {
        return <Redirect to='/home' />
    }

    return (
        <div>
            {console.log(routeProps)}
            <Route {...routeProps} component={component} />
        </div>
    )
}



export default PublicRoute;
