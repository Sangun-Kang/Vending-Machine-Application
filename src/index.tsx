import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { VendingMachineApp } from './VendingMachineApp'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <VendingMachineApp />
  </React.StrictMode>
)
