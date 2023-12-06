import React from 'react';
import {Helmet} from "react-helmet";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Praxis({ data }) {
  return (
    <Container>
      <Helmet>
        <title>{data.praxisTitle}</title>
      </Helmet>
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
