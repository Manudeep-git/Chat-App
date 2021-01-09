import React from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profilecontext';

function PrivateRoute({ component, ...routeProps }) {
    const { profile, isLoading } = useProfile();
    // useProfile custom hook used from profilecontext.js
    console.log(profile)

    // Loader is a spinner here
    if (isLoading && !profile) {
        return <Container>
            <Loader center vertical size="md" content="loading" speed="normal" />
        </Container>
    }

    if (!profile && !isLoading) {
        return <Redirect to="/signin" />;
    }

    return (
        <Route {...routeProps} component={component} />
    );
}

export default PrivateRoute;
