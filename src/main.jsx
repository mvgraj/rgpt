import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

// Replace this with your actual Google OAuth Client ID
const GOOGLE_CLIENT_ID = '667211054303-1ekj79v848v626afgs965scj06ndftl6.apps.googleusercontent.com';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the entire app with GoogleOAuthProvider */}
    {/* <GoogleOAuthProvider > */}
      {/* Wrap your App component with BrowserRouter */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </GoogleOAuthProvider> */}
  </StrictMode>,
);