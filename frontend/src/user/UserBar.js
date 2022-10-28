import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import Navbar from 'react-bootstrap/Navbar'

import { useContext } from 'react'
import { StateContext } from '../contexts'

export default function UserBar() {
    
    const { state } = useContext(StateContext);

    if (state.user) {
        return (
            <Navbar bg ="primary" variant="dark">
                <Navbar.Brand href="">
                    <Logout />
                </Navbar.Brand>
            </Navbar>
        )
    } else {
        return (
            <Navbar bg ="primary" variant="dark">
                <Navbar.Brand href="">
                    <Login  />
                    <Register  />
                </Navbar.Brand>
            </Navbar>

        )
    }
}