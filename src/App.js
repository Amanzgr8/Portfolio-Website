import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import WelcomeBar from './Components/WelBar/WelBar';

function App() {
  return (
    <div className="App"> 
        <Navbar/>
        <WelcomeBar/>
    </div>
  );
}

export default App;
