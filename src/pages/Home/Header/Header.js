import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/WPG-Roman.png'

const Header = () => {
    const [user] = useAuthState(auth);
    
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">WPG-Roman</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="me-auto text-uppercase fs-5 fw-bold">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="services">Services</Nav.Link>
                        <Nav.Link as={Link} to="#blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="#about-me">About Me</Nav.Link>
                    </Nav>
                    <Nav className='text-uppercase fs-5 fw-bold '>
                        {
                            user ?
                                <>
                                    <p className='text-light text-center fw-normal text-lowercase m-2'>{user.email}</p>
                                    <button className='btn btn-link text-white text-decoration-none text-uppercase fs-5 fw-bold' onClick={handleSignOut}>sign out</button>
                                </>

                                :
                                <>
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>
                                </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;