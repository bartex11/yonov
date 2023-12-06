import React from 'react';
import {Helmet} from "react-helmet";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Galerie({ data }) {
  return (
    <Container>
      <Helmet>
        <title>Galerie - HNO-Praxis Yonov</title>
        <meta name="description" content="Galerie - Praxis für Hals-, Nasen-, Ohrenheilkunde Stanimir Yonov in Voerde" />
      </Helmet>
      <Row>
        <Col xs={12}>
          <h1 className="page-title">
            Galerei
          </h1>
        </Col>
        <Col xs={12}>
          <p>hier content galerie</p>
        </Col>

       
      </Row>
    </Container>

  );
}
