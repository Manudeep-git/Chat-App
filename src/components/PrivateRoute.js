import React from 'react'
import { Redirect } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profilecontext';
import Home from '../pages/Home';

function PrivateRoute() {
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
        <Home profile={profile} />
    );
}

export default PrivateRoute;
