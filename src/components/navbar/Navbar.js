import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setShow(true) : setShow(false);
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img className="nav__logo" src="#" alt="MovNet logo" />

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/12401199904115"
        alt="MovNet logo"
      />
    </div>
  );
}

export default Navbar;
