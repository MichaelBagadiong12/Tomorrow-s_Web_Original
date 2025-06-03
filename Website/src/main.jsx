import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartTab } from './pages/Cart/CartFunction';

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartTab>
    <App />
  </CartTab>
  </BrowserRouter>
)
