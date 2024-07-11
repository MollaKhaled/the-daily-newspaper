import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
 import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext);
 
  const handleLogout = () =>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className='px-4 text-decoration:none' to='/category/0'>Home</Link>
              <Link className='px-4 text-decoration:none' to='/category/0'>About</Link>
              <Link className='px-4 text-decoration:none' to='/category/0'>Career</Link>
            </Nav>
            <Nav className='align-items-center '>
              {
             <FaUserCircle className='mx-2' style={{ fontSize: "2rem" }}></FaUserCircle>
              }

              { 
              user ? <Button onClick={handleLogout} variant="secondary">LogOut</Button> :
                <Link to='/login'>
                <Button variant="secondary">Login</Button>
                </Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;