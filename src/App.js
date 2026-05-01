import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Layout from './Component/Layout';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ContactUs from './Component/Home/ContactUs';
import About from './Page/About';
import Project from './Page/Project';
function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // whether animation should happen only once
    easing: "ease-in-out", // smooth motion
  });
}, []);
  return (
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='project' element={<Project/>}/>
    </Route>
    </Routes>
  );
}

export default App;
