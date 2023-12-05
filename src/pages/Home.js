import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Home({ data }) {
  return (
    <Container>
      <Row>
      <Col xs={12}>
        <h1 className="page-title">
          {data.homeTitle}
        </h1>
      </Col>
      <Col xs={12} md={8}>
          
          <p>{data.homeParagraph}</p>
          <p>{data.homeParagraph1}</p>
          <p>{data.homeParagraph2}</p>
          <p>{data.homeParagraph3}</p>
          <p>{data.homeParagraph4}</p>
        </Col>
 
        <Col xs={12} md={4}>
          <Image src="./images/home_dr_yonov.png" fluid />
        </Col>
        
      </Row>
    </Container>

  );
}
