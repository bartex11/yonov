import React from 'react';

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer navbar-fixed-bottom">
      <div className="container">
        © 2012-{(new Date().getFullYear())} HNO-Praxis Yonov
      </div>
    </footer>
  );
}
