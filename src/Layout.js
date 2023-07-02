import React from "react";
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
           <Navbar bg='dark' variant='dark'>
                <Container>
                    <Nav className='me-auto'>
                        <Image  src='https://images.unsplash.com/photo-1544776527-68e63addedf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' width='30' height='30' className='d-inline-block align-top' alt=''/>
                        <Link to='/about' className='nav-link'>Azienda Salumiera</Link>
                    </Nav>
                    <Nav className='justify-content-end'>
                        <Link to='/home' className='nav-link'>Home</Link>
                        <Link to='/about' className='nav-link'>About Us</Link>
                        <Link to='/products' className='nav-link'>Products</Link>
                        <Link to='/add' className="nav-link">Create!</Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet /> 
        </>
    )
}

export default Layout;