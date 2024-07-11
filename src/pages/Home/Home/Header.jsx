import React from 'react';
import logo from '../../../assets/logo.png'
import { Button, Container } from 'react-bootstrap';
import moment from 'moment';
import Marquee from 'react-fast-marquee';

const Header = () => {
  return (
    <Container className='text-center'>
      <img src={logo} alt="" />
      <p><small>Journalism Without Fear or Favour</small></p>
      <p>{moment().format("dddd,MMMM,YYYY")}</p>
      <div className='d-flex'>
        <Button variant="danger">Latest</Button>
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some text.....
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;