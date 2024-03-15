import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/quickstart/root.css";
import "./styles/quickstart/rules.css";
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
