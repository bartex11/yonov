import React from 'react';

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer navbar-fixed-bottom">
      <div className="container">
        ©Yonov
      </div>
    </footer>
  );
}
