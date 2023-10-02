import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar(props) {
  return (
    <nav
      data-bs-theme="dark"
      class="navbar navbar-expand navbar-light bg-dark p-0"
    >
      <div className="container d-flex navbar">
        <div className="me-auto navbar-nav">
          <a href="/news" data-rr-ui-event-key="#news" class="nav-link">
            Noticias
          </a>
          <a href="/utils" data-rr-ui-event-key="#utils" class="nav-link">
            Utilidades
          </a>
          <a
            href="/osprojects"
            data-rr-ui-event-key="#osprojects"
            class="nav-link"
          >
            OpenSource
          </a>
        </div>
      </div>
    </nav>
  );
}

// function NavigationBar(props) {
//   return (
//     <div className="navbar-container">
//       <a className="navbar-item" href="/news">Noticias</a>
//       <a className="navbar-item" href="/utils">Utilidades</a>
//       <a className="navbar-item" href="/osprojects">Proyectos Open Source</a>
//       <a className="navbar-item" href="/links">Aprender</a>
//       <a className="navbar-item" href="/contact">Contacto</a>
//     </div>
//   );
// }

export default NavigationBar;
