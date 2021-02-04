import React from 'react'
import { Col, Divider, Grid, Row } from 'rsuite';
import CreateRoomBtnModal from '../components/CreateRoomBtnModal';
import DashboardToggle from '../components/dashboard/DashboardToggle';
import ChatRoomList from '../components/rooms/ChatRoomList';
// import { useProfile } from '../context/profilecontext'
// import { app } from '../config/firebase'
// import Sidebar from '../components/Sidebar';

function Home({ profile }) {
    return (
        <Grid fluid className='h-100 pt-2'>
            <Row>
                <Col xs={24} md={8}>
                    <h2>{profile.name}</h2>
                    <DashboardToggle />
                    <CreateRoomBtnModal />
                    <Divider> Join conversation</Divider>
                    <ChatRoomList />
                </Col>
            </Row>
        </Grid>
    )
}

export default Home