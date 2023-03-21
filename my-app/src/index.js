import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DarkModeContextProvider } from './context/themeContext/darkModeContext';
import { UserContextProvider } from './context/user/UserContext';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <UserContextProvider>
           <DarkModeContextProvider>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
           </DarkModeContextProvider>
        </UserContextProvider>


);

