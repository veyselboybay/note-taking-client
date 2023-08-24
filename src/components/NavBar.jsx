import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    let token = localStorage.getItem("auth-token")

    const logout = () => {
        localStorage.removeItem("auth-token")
        navigate("/login")
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Easy-Note-Take</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </Nav>
                    {!token && <Nav className="me-auto">
                        <NavLink className='nav-link' to='/register'>Register</NavLink>
                        <NavLink className='nav-link' to='/login'>Login</NavLink>
                    </Nav>}
                    {token && <Nav className="me-auto">
                        <NavLink className='nav-link' onClick={() => logout()}>Logout</NavLink>
                    </Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar