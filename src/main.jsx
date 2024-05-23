import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CookiesProvider } from './pages/shop/components/CookiesProvider.jsx'
import {CookiesProvider2} from './pages/favoris/components/CookiesProvider2.jsx'
import { CookiesProvider3 } from './pages/singleprod/components/CookiesProvider3.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<CookiesProvider3>
  <CookiesProvider2>
    <CookiesProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CookiesProvider>
  </CookiesProvider2>
</CookiesProvider3>
  
)
