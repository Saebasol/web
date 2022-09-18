import React from 'react'
import * as ReactDOM from 'react-dom/client'
import "modern-normalize"
import App from './App'


const rootElement = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)