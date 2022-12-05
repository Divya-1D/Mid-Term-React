import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from "@mui/material/styles";




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StyledEngineProvider injectFirst>

        {/* <React.StrictMode> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        {/* </React.StrictMode> */}
    </StyledEngineProvider>
);

reportWebVitals();