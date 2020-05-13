import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Gabriel A. Rocha, {currentYear}.</p>
      <p></p>
    </footer>
  );
}

export default Footer;
