import React from "react";
import { Helmet } from "react-helmet";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Termine({ data }) {
  return (
    <Container>
      <Helmet>
        <title>Termine - HNO-Praxis Yonov</title>
        <meta name="description" content="Termine - Praxis für Hals-, Nasen-, Ohrenheilkunde Stanimir Yonov in Voerde" />
      </Helmet>
      <Row>
        <Col xs={12}>
          <h1 className="page-title">Termine</h1>
        </Col>
        <Col xs={12} lg={{ span: 6, offset: 3 }}>
          <ul className="list-unstyled list-hours">
            <li className="list-unstyled-item list-hours-item d-flex">
              <span className="list-hours__day fw-bold">{data.monday}</span>
              <div className="text-end w-100 w-lg-auto">
                <span className="ml-auto me-4">{data.am}: 8-12</span>
                <span className="">{data.pm}: 14-17</span>
              </div>
              
            </li>
            <li className="list-unstyled-item list-hours-item d-flex">
              <span className="list-hours__day fw-bold">{data.tuesday}</span>
              <div className="text-end w-100">
                <span className="ml-auto me-4">{data.am}: 8-12</span>
                <span>{data.pm}: 14-17</span>
              </div>
          
            </li>
            <li className="list-unstyled-item list-hours-item d-flex">
              <span className="list-hours__day fw-bold">{data.wednesday}</span>
              <div className="text-end w-100">
              <span className="ml-auto">{data.pm}: 14-17</span>
              </div>
              
            </li>
            <li className="list-unstyled-item list-hours-item d-flex">
              <span className="list-hours__day fw-bold">{data.thursday}</span>
              <div className="text-end w-100">
                <span className="ml-auto me-4">{data.am}: 8-12</span>
                <span>{data.pm}: 14-17</span>
              </div>
            </li>
            <li class="list-unstyled-item list-hours-item d-flex today">
              <span className="list-hours__day fw-bold">{data.friday}</span>
              <div className="text-end w-100">
                <span className="ml-auto">{data.pm}: 14-17</span>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
