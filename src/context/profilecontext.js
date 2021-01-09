import React, { createContext, useContext, useState, useEffect } from 'react';
import { app } from "../config/firebase"

const ProfileContext = createContext();
// create context

const auth = app.auth();
const database = app.database();

// context provider - provider that provides children all it's context
export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null) // state changes
    const [isLoading, setIsLoading] = useState(true)

    // get signed in user from firebase - onAuthStateChange - Adds an observer for changes to the user's sign-in state.
    useEffect(() => {
        let userRef;
        // subscribe to auth changes
        const authUnSub = auth.onAuthStateChanged(authObj => { // authObj is only available when user signed in
            if (authObj) {

                userRef = database.ref(`/profiles/${authObj.uid}`)
                userRef.on('value', snapshot => {// listen to changes in real time
                    const profiledata = snapshot.val();
                    console.log(profiledata)

                    const data = {
                        name: profiledata.name,
                        createdAt: profiledata.createdAt,
                        uid: authObj.uid,
                        email: authObj.email
                    };

                    setProfile(data);
                    setIsLoading(false)
                })

            } else {

                if (userRef) {
                    userRef.off()
                }
                setProfile(null);
                setIsLoading(false);
            }
        })
        return () => {
            authUnSub();

            if (userRef) {
                userRef.off()
            }
        }
    }, [])

    // eslint-disable-next-line react/no-children-prop
    return (<ProfileContext.Provider value={{ profile, isLoading }}>
        {children}
    </ProfileContext.Provider>);
};

export const useProfile = () => useContext(ProfileContext) // to use the profile value