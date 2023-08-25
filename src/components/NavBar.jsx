import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import { CiLogin } from 'react-icons/ci'
import { BiRegistered } from 'react-icons/bi'



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
                        <NavLink className='nav-link' to='/'><AiOutlineHome /> Home</NavLink>
                    </Nav>
                    {!token && <Nav className="me-auto">
                        <NavLink className='nav-link' to='/register'><BiRegistered /> Register</NavLink>
                        <NavLink className='nav-link' to='/login'><CiLogin /> Login</NavLink>
                    </Nav>}
                    {token && <Nav className="me-auto">
                        <NavLink className='nav-link' onClick={() => logout()}><ImExit />Logout</NavLink>
                    </Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar