import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import WelcomeBar from './Components/WelBar/WelBar';
import AboutSection from './Components/WelBar/AboutSection';
import DeeperBar from './Components/DeeperBar/DeeperBar';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import ScrollPhaseSection from './Components/ScrollPhaseSection';

// gets rendered by index.js
function App() {
  return (
    <div className="App"> 
        <Navbar/>
        <ScrollPhaseSection>
          <WelcomeBar/>
        </ScrollPhaseSection>
        <ScrollPhaseSection>
          <AboutSection/>
        </ScrollPhaseSection>
        <ScrollPhaseSection>
          <DeeperBar/>
        </ScrollPhaseSection>
        <ScrollPhaseSection>
          <ContactMe/>
          <Footer/>
        </ScrollPhaseSection>
    </div>
  );
}

export default App;
