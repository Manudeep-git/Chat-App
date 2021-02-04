import React from 'react'
import { Nav } from 'rsuite'
import { RoomItem } from './RoomItem'

// eslint-disable-next-line arrow-body-style
const ChatRoomList = () => {
    return (
        <>
            <Nav
                appearance="subtle"
                vertical
                className="overflow-y-scroll custom-scroll"
            >
                <Nav.Item> <RoomItem /></Nav.Item>
                <Nav.Item> <RoomItem /></Nav.Item>
            </Nav>
        </>
    )
}


export default ChatRoomList
