import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
import Amazing from '../Amazing/Amazing';

const RightNav = () => {
  return (

    <div>
     <h4>Login with</h4>
      <Button className='mb-2 w-75' variant="primary"><FaGoogle /> Login with Google</Button>
      <Button className='mb-2 w-75' variant="secondary"><FaGithub /> Login with Github</Button>
      <div>
        <h4>Find us on</h4>
      <ListGroup>
      <ListGroup.Item ><FaFacebook ></FaFacebook>   Facebook</ListGroup.Item>
      <ListGroup.Item><FaX></FaX> X</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <div className='bg-secondary text-center py-4 mt-4 '>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div className='mt-3'>
        <Amazing></Amazing>
      </div>
    </div>
  );
};

export default RightNav;