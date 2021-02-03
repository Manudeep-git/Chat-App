/* eslint-disable arrow-body-style */
import React from 'react'

const RoomsList = ({ rooms }) => {
    console.log(rooms, 5, 'rooms')
    return (
        <div style={{ padding: 50 }}>
            {rooms.forEach(room => {
                return <div>
                    <p>{room.name}</p>
                </div>

            })}
        </div>
    )
}

export default RoomsList
