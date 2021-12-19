import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const NavigateBar = () => {
    const { finishedlist, watchlist } = useSelector((state) => state.movie)
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar sticky="top" bg="dark" expand="lg" >
                <Container>
                    <Navbar.Brand style={{
                        color: "white"
                    }} as={Link} to="/home">Movie Dream Watch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{
                                color: "white"
                            }} as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link style={{
                                color: "white"
                            }} as={Link} to="/finishedlist">Finishedlist <span style={{
                                backgroundColor: "rgb(174, 53, 255)",
                                padding: "1px 5px",
                                borderRadius: "4px"
                            }}>{finishedlist.length}</span></Nav.Link>
                            <Nav.Link style={{
                                color: "white"
                            }} as={Link} to="/watchlist">Watchlist <span style={{
                                backgroundColor: "rgb(174, 53, 255)",
                                padding: "1px 5px",
                                borderRadius: "4px"
                            }}>{watchlist.length}</span></Nav.Link>
                        </Nav>
                        <Navbar.Text style={{
                            color: "white"
                        }}> Signed in as: <a style={{
                            color: "white"
                        }} href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        {
                            user.email ? <button onClick={logOut} className='CustomButton2'> Logout</button> : ""
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigateBar;