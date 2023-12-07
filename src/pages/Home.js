import React from 'react';
import {Helmet} from "react-helmet";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import yonov from '../images/home_dr_yonov.png'


export default function Home({ data }) {
  
  return (

    <Container>
      <Helmet>
        <title>HNO-Praxis Yonov</title>
        <meta name="description" content="Praxis für Hals-, Nasen-, Ohrenheilkunde Stanimir Yonov in Voerde" />
      </Helmet>

      <Row>
        <Col xs={12}>
          <h1 className="page-title mb-4">
            {data.homeTitle}
          </h1>
        </Col>
        <Col xs={12} md={8}>
            
            <p>{data.homeParagraph}</p>
            <p>{data.homeParagraph1}</p>
            <p>{data.homeParagraph2}</p>
            <p>{data.homeParagraph3}</p>
            <p>{data.homeParagraph4}</p>

            <div className='mt-5 fw-bold'>
              {data.you
                ? <p className='mb-0'>{data.you}</p>
                : ''
              }
              <p>{data.team}</p>
            </div>
            

        </Col>
  
        <Col xs={12} md={4}>
          <Image src={yonov} fluid />
        </Col>
        
      </Row>
    </Container>

  );
}
