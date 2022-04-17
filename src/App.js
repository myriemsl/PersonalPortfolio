import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Particles from "react-tsparticles";



function App() {
  return (
    <div className="app">
    <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#5c54a4 ",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "top",
              enable: true,
              speed: 0.1,
            },
            number: {
              density: {
                enable: true,
                value_area: 1800,
              },
              value:170,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.05,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              random: false,
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
     
      <NavBar/>
        <Home/>
        <About/>
        <Projects/>
      <Footer/>                
    </div>
  );
}

export default App;
