import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import Navbar from 'react-bootstrap/Navbar'

export default function UserBar({user, dispatch}) {
    
    if (user) {
        return (
            <Navbar bg ="primary" variant="dark">
                <Navbar.Brand href="">
                    <Logout user={user} dispatch={dispatch} />
                </Navbar.Brand>
            </Navbar>
        )
    } else {
        return (
            <Navbar bg ="primary" variant="dark">
                <Navbar.Brand href="">
                    <Login dispatch={dispatch} />
                    <Register dispatch={dispatch} />
                </Navbar.Brand>
            </Navbar>

        )
    }
}