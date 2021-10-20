import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    const { AllContexts } = useAuth();
    const { user, logOut } = AllContexts;
    const { displayName, photoURL, email } = user;
    return (
        <div className="">
            <Navbar className="nav  bg-light  " expand="lg" fixed="top" >
                <Container>
                    <Navbar.Brand as={NavLink} className="logo1" to="/home">
                        <h3><span className="logo">Bridal</span> <span className="logo1">Health</span></h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" className="logo1 fw-bold">
                                Home
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/services" className=" logo1 fw-bold">
                                Doctors
                            </Nav.Link>

                            <Nav.Link as={HashLink} to="/urgent" className=" logo1 fw-bold">
                                Urgent Care
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/lab" className=" logo1 fw-bold">
                                Lab Test
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/about" className="logo1 fw-bold">
                                About
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/contact" className="logo1 fw-bold">
                                Contact
                            </Nav.Link>




                            {!displayName ? (
                                <>
                                    <Nav.Link as={NavLink} to="/register" className="logo1">
                                        <span className="logo fw-bold">Sign Up</span>
                                    </Nav.Link>

                                    <Nav.Link className="logo1" as={NavLink} to="/login">
                                        <span className="logo fw-bold">Log in</span>
                                    </Nav.Link>
                                </>
                            ) : (
                                <NavDropdown
                                    title={
                                        <img
                                            style={{
                                                width: "45px",
                                                borderRadius: "50%",
                                            }}
                                            src={photoURL}
                                            alt=""
                                        />
                                    }
                                >
                                    <div className="text-center">
                                        <h6>{displayName}</h6>
                                        <p className="m-0 mb-2">{email}</p>
                                        <button onClick={logOut} className="btn btn-primary">
                                            Sign Out
                                        </button>
                                    </div>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;
