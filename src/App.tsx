import React from 'react';
import './App.scss'
import AppRoute from "./route/index";
import goldenLudo from "./assets/golden-ludo.svg";

function App() {

  return (
    <div className='app-layout'>
     <AppRoute />
     {
      window.innerWidth > 500 
      ?
        <div className='right-side-ludo-icon'> 
        <div className="icon-container ">  
          <img src={goldenLudo} />
        </div>
      </div> 
      :
      <></>
     }
    </div>
  )
}

export default App
