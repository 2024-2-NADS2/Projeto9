import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Adopt from './pages/Adopt';
import Care from './pages/Care';
import Contact from './pages/Contact';
import About from './pages/About';
import './styles.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp';

const App = () => {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === '/sign-up';

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const applyDarkMode = (isDarkMode) => {
      document.body.classList.toggle('dark-mode', isDarkMode);
  
      const elementsToToggle = [
        '#header',
        'footer',
        '#conteinerCard',
        '#textCard',
        '.input'
      ];
  
      elementsToToggle.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          element.classList.toggle('dark-mode', isDarkMode);
        });
      });
    };
  
    applyDarkMode(darkMode);
  
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode, location.pathname]);
  
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  

  return (
    <>
      {!hideHeaderAndFooter && <Header toggleTheme={toggleTheme} darkMode={darkMode} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/care" element={<Care />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
