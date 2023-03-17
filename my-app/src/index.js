import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DarkModeContextProvider } from './context/themeContext/darkModeContext';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <DarkModeContextProvider>
            <BrowserRouter>
                    <App />
            </BrowserRouter>
        </DarkModeContextProvider>

);

