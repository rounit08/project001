import React from "react";
import "./Footer.css";

function Footer({ icon, title, number }) {
  return (
    <div className="footer">
      <div className="footer_left">
        <p> {icon}</p>
        <p>{title}</p>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default Footer;
