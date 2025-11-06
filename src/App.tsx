import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Reels from './components/Reels';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
      {activeSection === 'sobre' && <About />}
      {activeSection === 'reels' && <Reels />}
      {activeSection === 'blog' && <Blog />}
      {activeSection === 'galeria' && <Gallery />}
      {activeSection === 'contato' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
