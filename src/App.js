import React from 'react';
import Navbar from './components/Navbar';

// Import all sections as components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Research from './pages/Research';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="blog"><Blog /></section>
        <section id="research"><Research /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
