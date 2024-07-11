import React from 'react';
import Header from '../pages/Home/Home/Header';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../Shared/RightNav/RightNav';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
      <Row>
        <Col lg={3}>
     <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
        <Outlet></Outlet>
        </Col>
        <Col lg={3}>
        <RightNav></RightNav>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Main;