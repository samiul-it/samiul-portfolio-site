import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Projects from "./components/Projects/Projects";

import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import Blogs from "./components/Blogs/Blogs";
import "aos/dist/aos.css";
import AOS from "aos";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";

function App() {
  AOS.init();

  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
