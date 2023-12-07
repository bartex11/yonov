import React from 'react';
import {Helmet} from "react-helmet";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Praxis({ data }) {
  return (
    <Container>
      <Helmet>
        <title>Praxis - HNO-Praxis Yonov</title>
        <meta name="description" content="Praxis - Praxis für Hals-, Nasen-, Ohrenheilkunde Stanimir Yonov in Voerde" />
      </Helmet>
      <Row>
        <Col xs={12}>
          <h1 className="page-title">
            {data.praxisTitle}
          </h1>

          <p>{data.praxisParagraph}</p>

          <h2>{data.praxisTitle1}</h2>
          <p>{data.praxisParagraph1}</p>
          <ul>
            <li>{data.li}</li>
            <li>{data.li1}</li>
            <li>{data.li2}</li>
          </ul>
          <p>{data.praxisParagraph2}</p>
          <ul>
            <li>{data.li3}</li>
            <li>{data.li4}</li>
          </ul>

          {data.praxisParagraph3
            ? <p>{data.praxisParagraph3}</p>
            : ''
          }

          {data.praxisParagraph4
            ? <p>{data.praxisParagraph4}</p>
            : ''
          }

          {data.praxisParagraph5
            ? <p>{data.praxisParagraph5}</p>
            : ''
          }

          {data.praxisParagraph6
            ? <p>{data.praxisParagraph6}</p>
            : ''
          }

          {data.praxisParagraph7
            ? <p>{data.praxisParagraph7}</p>
            : ''
          }
          {data.praxisParagraph8
            ? <p>{data.praxisParagraph8}</p>
            : ''
          }

          <h2>{data.praxisTitle2}</h2>


        </Col>

       
      </Row>
    </Container>

  );
}
