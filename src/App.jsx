import React from 'react';
import './App.css';
import Navbar from './Componnent/Nav/Navbar';
import Home from './Componnent/Home/Home';
import Service from './Componnent/Service/Service';
import Work from './Componnent/Work/Work';
import Contact from './Componnent/Contact/Contact';
import Footer from './Componnent/Footer/Footer';
import About from './Componnent/About/About';
import Blog from './Componnent/Blog/Blog';
import BlogDetail from './Componnent/Blog/BlogDetail'; // Import BlogDetail
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import WorkDetail from './Componnent/Work/WorkDetail/WorkDetail';
import Project from './Componnent/Work/WorkDetail/ProjectDetail/Project';
import ProjectDetail from './Componnent/Work/WorkDetail/ProjectDetail/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define routes for navigation */}
          <Route
            path="/"
            element={
              <>
                {/* Wrapping each section with <Element> for react-scroll */}
                <Element name="home">
                  <Home />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                {/* <Element name="services">
                  <Service />
                </Element> */}
                <Element name="work">
                  <Work />
                </Element>
                <Element name="blog">
                  <Blog />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
      
              </>
            }
          />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/works" element={<WorkDetail />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/detail" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;