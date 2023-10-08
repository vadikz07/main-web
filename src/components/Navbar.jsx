import React from "react";

function NavigationBar(props) {
  return (
    <div className="navbar">
      <a href="/news" data-rr-ui-event-key="#news" class="nav-link">
        Noticias
      </a>
      <a href="/utils" data-rr-ui-event-key="#utils" class="nav-link">
        Utilidades
      </a>
      <a href="/osprojects" data-rr-ui-event-key="#osprojects" class="nav-link">
        OpenSource
      </a>
    </div>
  );
}

export default NavigationBar;
