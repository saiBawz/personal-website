import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";


const Layout = ({ isDarkMode, toggleTheme, increaseFont, decreaseFont }) => {
    return (
        <div className="layout-wrapper">
      <Header isDarkMode={isDarkMode} /> 

      {/* This renders the current page (Home, About, etc.) */}
      <main>
        <Outlet />
      </main>

      {/* PERSISTENT MENU: This stays visible on all pages */}
      <div className="floating-accessibility-menu">
        <button onClick={toggleTheme} title="Toggle Theme">
          {isDarkMode ? '🌞' : '🌙'}
        </button>
        <button onClick={increaseFont} title="Increase Font">A+</button>
        <button onClick={decreaseFont} title="Decrease Font">A-</button>
      </div>

      <Footer /> 
    </div>
  );
};

export default Layout;