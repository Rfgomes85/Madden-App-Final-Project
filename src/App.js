import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Videos from './components/Videos';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Wrap the entire application with the Router component */}
      <Router>
        <div style={{ backgroundColor: 'black', color: 'white' }}>
          {/* Render the Navigation component */}
          <Navigation />
        </div>

        <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
          {/* Render different components based on the current URL path */}
          <Routes>
            {/* Define the routes */}
            <Route path="/" element={<Home />} />
            {/* Render the Home component when the path is '/' */}
            <Route path="/videos" element={<Videos />} />
            {/* Render the Videos component when the path is '/videos' */}
            <Route path="/reviews" element={<Reviews />} />
            {/* Render the Reviews component when the path is '/reviews' */}
            <Route path="/contact" element={<Contact />} />
            {/* Render the Contact component when the path is '/contact' */}
            <Route path="/signup" element={<Signup />} />
            {/* Render the Signup component when the path is '/signup' */}
          </Routes>
        </div>
      </Router>
      {/* Render the Footer component */}
      <Footer/>
    </div>
  );
}

export default App;
