/* eslint-disable arrow-body-style */
import React, { useState, useCallback } from 'react'
import { Alert, Button, Drawer, Icon } from 'rsuite'
import { app } from '../../config/firebase';
import Dashboard from '.';

const DashboardToggle = () => {
    const [isOpen, setIsOpen] = useState(false)
    const open = useCallback(() => {
        setIsOpen(true)
    }, []);

    const close = useCallback(() => {
        setIsOpen(false)
    }, []);

    const onSignOut = useCallback(() => {
        app.auth().signOut();

        Alert.info("Signed out", 3000);

        close();
    }, [close]);

    return (
        <div className='h-100 pt-2'>
            <Button block color="green" onClick={open}>
                <Icon icon="dashboard" /> Dashboard
            </Button>
            <Drawer show={isOpen} onHide={close} placement="left">
                <Dashboard onSignOut={onSignOut} />
            </Drawer>
        </div>
    )
}

export default DashboardToggle
