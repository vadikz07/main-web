import React from "react";

function Navbar(props) {
  return (
    <div className="navbar-container">
      <a className="navbar-item" href="/news">Noticias</a>
      <a className="navbar-item" href="/utils">Utilidades</a>
      <a className="navbar-item" href="/contact">Contacto</a>
    </div>
  );
}

export default Navbar;
