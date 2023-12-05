import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import SwitchLang from './SwitchLang'

export default function Header({ data, i18n }) {
  const menuItems = [
    {
      title: data.menu1,
      uri: '/home',
    },
    {
      title: data.menu2,
      uri: '/praxis',
    },
    {
      title: data.menu3,
      uri: '/termine',
    },
    {
      title: data.menu4,
      uri: '/gallery',
    },
    {
      title: data.menu5,
      uri: '/contacts',
    },
  ];

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">

        <Container>
          <Navbar.Brand href="/home">HNO-Praxis Yonov </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarSupportedContent" />

         
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">

              {menuItems.map((item) => (
                <NavLink key={item.uri} to={item.uri} className="nav-link" activeClassName="active">
                  {item.title}
                </NavLink>
              ))}
 
            </Nav>
            <SwitchLang i18n={i18n} />

            </Navbar.Collapse>
          </Container>
        </Navbar>

    </header>
  );
}
