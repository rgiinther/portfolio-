import React from 'react';
import './App.css';

//import components
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
