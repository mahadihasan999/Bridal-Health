import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"
const Header = () => {
    const { user, logOut } = useAuth();

    return (
        < >
            <Navbar className="header text-light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="text-ligt" href="#home">Bridal Health</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#fetures">Fetures</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;