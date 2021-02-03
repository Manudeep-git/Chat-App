/* eslint-disable arrow-body-style */
/* eslint-disable */
import React, { useCallback, /*useEffect*/ } from 'react'
import { Alert, Button, Drawer, Icon, InputGroup, Modal, Input } from 'rsuite'
import { app, auth, database } from '../../config/firebase';
import Dashboard from '.';
import RoomsList from '../../pages/RoomsList';
import { useModalState } from '../../customHooks/CustomHooks';

const DashboardToggle = () => {
    const { isOpen, open, close } = useModalState();
    const onSignOut = useCallback(() => {
        auth.signOut();
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
            {/* <Button style={{ color: "grey" }} onClick={openModal}>
                Create Room
            </Button> */}
        </div>
    )
}

export default DashboardToggle
