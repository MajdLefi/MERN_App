import React from 'react'
import {useSelector} from 'react-redux'
import NavBar from '../NavBar/NavBar'

const Dashboard = () => {
    const user = useSelector ((state) => state.authReducer.user)
    if (!user) {
        return <h1>spinenr...</h1>
    }
    return (
        <div>
            <NavBar/>
            <h1>{user.name} {user.lastName}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default Dashboard;