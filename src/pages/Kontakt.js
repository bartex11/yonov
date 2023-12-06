import React from 'react';
import {Helmet} from "react-helmet";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Kontakt({ data }) {
  return (
    <Container>
      <Helmet>
        <title>Kontakt - HNO-Praxis Yonov</title>
        <meta name="description" content="Kontakt - Praxis für Hals-, Nasen-, Ohrenheilkunde Stanimir Yonov in Voerde" />
      </Helmet>
      <Row>
        <Col xs={12}>
          <h1 className="page-title">
          Kontakt
          </h1>
        </Col>
        <Col xs={12}>
          <p>hier content Kontakt</p>
        </Col>

       
      </Row>
    </Container>

  );
}
