import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Praxis({ data }) {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="page-title">
            {data.praxisTitle}
          </h1>
        </Col>
        <Col xs={12}>
          <p>{data.praxisParagraph}</p>
        </Col>

       
      </Row>
    </Container>

  );
}
