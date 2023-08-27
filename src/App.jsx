import Nav from "./components/Nav"
import { useState } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";
import logo from './components/assets/logo.png'
import Footer from "./components/Footer";

const App = () => {
  const [change, setChange] = useState('0');
  const handleNavChange = (newValue) => {
    setChange(newValue);
  };
  return (
    <main className="relative">
      <a href="/" className="absolute top-[10px] left-[5px]">
        <img
          src={logo}
          alt="logo"
          className="max-lg:h-[7vh] ml-[10px] h-[9vh]"
        />
      </a>
      <Nav whenChange={handleNavChange} />
      <Home change={change} />
      <About change={change} />
      <Projects change={change} />
      <Blogs change={change} />
      <Contact change={change} />
      <Footer/>
    </main>
  )
}
export default App