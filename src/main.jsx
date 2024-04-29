import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Carro from './components/Carro/Carro.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Carro nome =" Monza" marca ="Chevrolet" ano="1982"/>
    <Carro nome =" Fox" marca ="Volkswagen" ano="12003"/>
    <Carro nome =" Fusca" marca ="Volkswagen" ano="1938"/>
    <Carro nome =" Lancer" marca ="Mitsubishi" ano="1973"/>
    <Carro nome =" Citroën C3 Aircross" marca ="Citroën" ano="1982"/>
    <Carro nome =" HB20" marca ="Hyundai" ano="2012"/>
  </React.StrictMode>,
)
