import React from "react";
import Jumbo from "./components/Jumbo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import UtilsPage from "./pages/UtilsPage";
import NoPage from "./pages/NoPage";

function App(){
    return <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<NewsPage />} />
                <Route path="/utils" element={<UtilsPage />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default App