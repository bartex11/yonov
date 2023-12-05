import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">HNO-Praxis Yonov </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            
              {menuItems.map((item) => (
                <li class="nav-item" key={item.title}>
                  <NavLink key={item.uri} to={item.uri} className="nav-link" activeClassName="active">
                    {item.title}
                  </NavLink>
                </li>
      
              ))}
  

 
            </ul>
            <SwitchLang i18n={i18n} />
          </div>
        </div>
      </nav>

    </header>
  );
}
