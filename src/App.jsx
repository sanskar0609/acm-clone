import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BackgroundOld from './components/BackgroundOld';
import Home from './pages/Home';
import Events from './pages/Events';
import MainBoard from './pages/MainBoard';
import ExecutiveBoard from './pages/ExecutiveBoard';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="relative max-w-full overflow-hidden min-h-screen flex flex-col font-jakarta bg-transparent text-white">
        <Background/>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/board/main" element={<MainBoard />} />
            <Route path="/board/executive" element={<ExecutiveBoard />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

