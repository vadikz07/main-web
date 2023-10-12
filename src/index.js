import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import UtilsPage from './pages/UtilsPage'

import 'bootstrap/dist/css/bootstrap.min.css';

// const container = document.getElementById("root");
// const root = createRoot(container)
// root.render(<App />)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter>
            <UtilsPage />
        </HashRouter>
    </React.StrictMode>
)