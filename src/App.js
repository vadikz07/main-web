import React from "react";
import Jumbo from "./components/Jumbo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import UtilsPage from "./pages/UtilsPage";
import NoPage from "./pages/NoPage";
import ExternalLinks from "./pages/ExternalLinks";
import OpenSourceFinds from "./pages/OpenSourcePage";

function App() {
  return (
    <div className="custom-background">
      <BrowserRouter>
        <Routes>
          <Route index element={<NewsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/utils" element={<UtilsPage />} />
          <Route path="/osprojects" element={<OpenSourceFinds />} />
          <Route path="/links" element={<ExternalLinks />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
