/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useCallback, useRef, useState } from 'react'
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup, Icon, Modal, Schema } from 'rsuite';
import firebase from 'firebase'
import { useModalState } from '../customHooks/CustomHooks'
import { database } from '../config/firebase';

// eslint-disable-next-line arrow-body-style
const CreateRoomBtnModal = () => {
    const { isOpen, open, close } = useModalState();
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false)
    const { StringType } = Schema.Types;
    const formRef = useRef(); // hook used to reference html elements{current: {}}

    const initialFormValue = {
        name: "",
        description: ""
    }
    const [formValue, setFormValue] = useState(initialFormValue)

    const model = Schema.Model({
        name: StringType().rangeLength(3, 50, "Room name could be between 3 and 50 characters"),
        description: StringType().isRequired('Description required')
    })


    const onFormChange = useCallback((value) => { // value here is entire form data value
        setFormValue(value)
    }, []);

    const onSubmit = async () => {
        if (!formRef.current.check()) {
            return;
        }

        setIsLoading(true)

        const newRoomdata = {
            ...formValue,
            createdAt: firebase.database.ServerValue.TIMESTAMP
        }

        try {
            await database.ref('rooms').push(newRoomdata);

            Alert.info(`${formValue.name} has been created`, 3000)

            setFormValue(initialFormValue);
            setIsLoading(false)
            close();
        }
        catch (e) {
            setIsLoading(false)
            Alert.error(e.message, 3000);
        }
    }





    return (
        <div className="mt-1">
            <Button block style={{ color: "blue", backgroundColor: "orange" }} onClick={open}>
                <Icon icon="creative" style={{ color: "yellow" }} /> Create new room
            </Button>
            <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>Create Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form fluid onChange={onFormChange} formValue={formValue} model={model} ref={formRef}>
                        <FormGroup>
                            <ControlLabel>Room Name</ControlLabel>
                            <FormControl name="name" placeholder="Enter chat room name here" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Description</ControlLabel>
                            <FormControl
                                name="description"
                                rows={4}
                                componentClass="textarea"
                                placeholder="Enter room description here"
                            />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button block appearance="primary" onClick={onSubmit} disabled={isLoading}>
                        Add Room
                    </Button>
                    <Button block color="red" onClick={close} appearance="primary">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default CreateRoomBtnModal
