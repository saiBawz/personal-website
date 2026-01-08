import './App.css' 
import React, { useState } from 'react'; // Add { useState } inside the curly braces
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
const [isDarkMode, setIsDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState(18);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const increaseFont = () => setFontSize(prev => Math.min(prev + 2, 32));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 2, 14));

  return (
    <div
      className={isDarkMode ? 'home-container' : 'home-container light-mode'}
      style={{ '--font-size': `${fontSize}px` }}
    >
    <Router>
      <Routes>
        <Route path="/" element={<Layout isDarkMode={isDarkMode} 
           toggleTheme={toggleTheme} 
              increaseFont={increaseFont} 
              decreaseFont={decreaseFont}
          /> }>
         <Route index element={<Home 
         isDarkMode={isDarkMode} 
    fontSize={fontSize}
    toggleTheme={toggleTheme} 
    increaseFont={increaseFont} 
    decreaseFont={decreaseFont}
     />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          
        </Route> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
