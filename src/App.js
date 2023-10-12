import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import UtilsPage from "./pages/UtilsPage";
import NoPage from "./pages/NoPage";
import ExternalLinks from "./pages/ExternalLinks";
import OpenSourceFinds from "./pages/OpenSourcePage";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function App() {
  return (
      <>
          <Col id="app-main-column"xs={12} s={12} md={10} lg={8}>
            <BrowserRouter>
              <Routes>
                <Route index element={<UtilsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/utils" element={<UtilsPage />} />
                <Route path="/osprojects" element={<OpenSourceFinds />} />
                <Route path="/links" element={<ExternalLinks />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
            </BrowserRouter>
          </Col>
      </>
  );
}

export default App;
