import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './pages/cargoLists/card.jsx'  



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div>
      {/* <Card
        imageUrl='https://cdn.pixabay.com/photo/2016/11/29/04/15/digger-1867268_1280.jpg'
        name='Tanny'
        description='I am a coder'
      />
      <Card
        imageUrl='https://cdn.pixabay.com/photo/2017/06/11/10/46/truck-2391940_1280.jpg'
        name='John'
        description='Web developer'
      />
      {/* You can create multiple Card components with different props */}
    </div>
     */}
    
  </React.StrictMode>,
)
