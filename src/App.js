import React from "react"
function App() {
  return (
      <>
          <Col id="app-main-column"xs={12} s={12} md={10} lg={8}>
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
          </Col>
      </>
  );
}


