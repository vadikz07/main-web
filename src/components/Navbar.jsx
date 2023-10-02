import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar(props) {
  return (
    <nav data-bs-theme="dark" class="navbar navbar-expand navbar-light bg-primary">
      <div class="container">
        <a href="#home" class="navbar-brand">
          Navbar
        </a>
        <div class="me-auto navbar-nav">
          <a href="#home" data-rr-ui-event-key="#home" class="nav-link">
            Home
          </a>
          <a href="#features" data-rr-ui-event-key="#features" class="nav-link">
            Features
          </a>
          <a href="#pricing" data-rr-ui-event-key="#pricing" class="nav-link">
            Pricing
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
