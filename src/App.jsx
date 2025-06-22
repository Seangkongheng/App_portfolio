import React from "react";
import "./App.css";
import Navbar from "./Componnent/Nav/Navbar";
import Home from "./Componnent/Home/Home";
import Service from "./Componnent/Service/Service";
import Work from "./Componnent/Work/Work";
import Contact from "./Componnent/Contact/Contact";
import Footer from "./Componnent/Footer/Footer";
import About from "./Componnent/About/About";
import Blog from "./Componnent/Blog/Blog";
import BlogDetail from "./Componnent/Blog/BlogDetail";
import BlogPage from "./Componnent/Blog/Pages/BlogPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import WorkDetail from "./Componnent/Work/WorkDetail/WorkDetail";
import Project from "./Componnent/Work/WorkDetail/ProjectDetail/Project";
import ProjectDetail from "./Componnent/Work/WorkDetail/ProjectDetail/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home page with scroll sections */}
          <Route
            path="/"
            element={
              <>
                <Element name="home"><Home /></Element>
                <Element name="about"><About /></Element>
                {/* <Element name="services"><Service /></Element> */}
                <Element name="work"><Work /></Element>
                <Element name="blog"><Blog /></Element>
                <Element name="contact"><Contact /></Element>
              </>
            }
          />

          {/* Blog list page */}
          <Route path="/blog-page" element={<BlogPage />} />

          {/* Blog detail with dynamic id */}
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Work and Project routes */}
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
