import React from 'react'
import { Col, Grid, Row } from 'rsuite';
import CreateRoomBtnModal from '../components/CreateRoomBtnModal';
import DashboardToggle from '../components/dashboard/DashboardToggle';
// import { useProfile } from '../context/profilecontext'
// import { app } from '../config/firebase'
// import Sidebar from '../components/Sidebar';

function Home({ profile }) {
    return (
        <Grid fluid>
            <Row>
                <Col xs={24} md={8}>
                    <h2>{profile.name}</h2>
                    <DashboardToggle />
                    <CreateRoomBtnModal />
                </Col>
            </Row>
        </Grid>
    )
}

export default Home