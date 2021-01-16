/* eslint-disable arrow-body-style */
import React from 'react'
import { Button, Drawer } from 'rsuite'
import { useProfile } from '../../context/profilecontext'

const Dashboard = ({ onSignOut }) => {
    const { profile } = useProfile()

    return (
        <>
            <Drawer.Header>
                <Drawer.Title>
                    Dashboard
                </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                <h3>Welcome, {profile.name}</h3>
            </Drawer.Body>
            <Drawer.Footer>
                <Button block color="red" onClick={onSignOut}>
                    Signout
                </Button>
            </Drawer.Footer>
        </>
    )
}

export default Dashboard
