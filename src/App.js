import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import WelcomeBar from './Components/WelBar/WelBar';
import DeeperBar from './Components/DeeperBar/DeeperBar';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';

// gets rendered by index.js
function App() {
  return (
    <div className="App"> 
        <Navbar/>
        <WelcomeBar/>
        <DeeperBar/>
        <ContactMe/>
        <Footer/>
    </div>
  );
}

export default App;
