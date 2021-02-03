/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useRef, useState } from 'react'
import { Button, Drawer, Icon, Input, InputGroup, Alert } from 'rsuite'
import { app } from '../../config/firebase'
import { useProfile } from '../../context/profilecontext'

const Dashboard = ({ onSignOut }) => {
    const { profile } = useProfile()
    const [disable, undisable] = useState(true);
    const [errorField, removeErrorField] = useState(false)
    const [actualName, changedName] = useState(profile.name)
    const inputRef = useRef()

    const onNameUpdate = async () => {
        console.log(actualName, 15)
        // console.log(e)
        // const userObj = app.database().ref(`/profiles/${profile.uid}`);
        // userObj.update({ name: e })
    }



    const validName = (data, type) => {
        console.log(data, type, 21)
        switch (type) {
            case 'name': {
                return (data.length > 3 && data.length < 50) ? (removeErrorField(true), undisable(false), changedName(data)) : (removeErrorField(false), undisable(true));
            }
            default: return null;
        }
    }
    return (
        <>
            <Drawer.Header>
                <Drawer.Title>
                    Dashboard
                </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                <h3 className="mb-2">Welcome, {actualName.toUpperCase()}</h3>
                <InputGroup className="mb-2">
                    <Input placeholder="Set your nickname"
                        onChange={(e) => { validName(e, 'name') }}
                    // onChange={(e) => onNameUpdate(e)} 
                    />
                    <InputGroup.Addon>
                        <Icon icon="edit" />
                    </InputGroup.Addon>
                </InputGroup>
            </Drawer.Body>
            <Drawer.Footer>
                <Button block style={disable ? { color: "green" } : { color: "orange" }} onClick={() => { onNameUpdate() }} disabled={disable}>
                    Save
                </Button>
                <Button block color="red" onClick={onSignOut}>
                    Signout
                </Button>
            </Drawer.Footer>
        </>
    )
}

export default Dashboard
