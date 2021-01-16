/* eslint-disable no-unused-vars */
import React from 'react';
import firebase from 'firebase'
import { Container, Grid, Panel, Row, Col, Icon, Button, Alert } from 'rsuite';
// import { ToastContainer, toast } from 'react-toastify';
import { app } from '../config/firebase'
// import 'react-toastify/dist/react-toastify.esm'

function SignIn({ ...routeProps }) {
    const auth = app.auth();
    const db = app.firestore();
    // let count = 1;
    const database = app.database();
    const { history } = routeProps;

    const signInProvider = async provider => {
        try {
            const { additionalUserInfo, user } = await auth.signInWithPopup(provider)
            if (additionalUserInfo.isNewUser) {
                database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    userid: user.uid,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                })
            }
            // db.collection("profiles").doc(user.displayName).add({
            //     userid: user.uid,
            //     displayName: user.displayName
            // }).then(() => {
            //     // count += 1
            //     console.log("user signed in");
            // }).catch((error) => {
            //     console.log("error while signing in", error);
            // });
            // console.log(additionalUserInfo);
            // console.log(user);
            Alert.success("Signed in", 3000);
            // history.push('/home')
        } catch (err) {
            Alert.info(err.message, 3000);
        }

    }

    const onGoogleSignIn = () => {
        const google = new firebase.auth.GoogleAuthProvider();
        signInProvider(google);
    }

    const onFaceBookSignIn = () => {
        signInProvider(new firebase.auth.FacebookAuthProvider());
    }

    // const onOtpSignIn = () => {
    //     signInProvider(new firebase.auth.);
    // }

    return (
        <Container>
            <Grid className='mt-page'>
                <Row>
                    <Col xs={24} md={12} mdOffset={6}>
                        <Panel>
                            <div className='text-center'>
                                <h2>Welcome to Chat </h2>
                            </div>
                            <div className='mt-3'>
                                <Button block color='blue' onClick={onFaceBookSignIn}>
                                    <Icon icon="facebook" />  Continue with Facebook
                                </Button>
                                <Button block color='orange' onClick={onGoogleSignIn}>
                                    <Icon icon="google" />    Continue with Google
                                </Button>
                                {/* <Button block color="cyan" onClick={onOtpSignIn}>
                                    <Icon icon='mobile' /> Sign in using otp
                                </Button> */}
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
            {/* <ToastContainer /> */}
        </Container >
    )
};

export default SignIn;