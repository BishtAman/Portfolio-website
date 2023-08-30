import Nav from "./components/Nav"
import { useState } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
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
      <a href="/" className="absolute top-5 left-5">
        <img
          src={logo}
          alt="logo"
          className="max-lg:h-[4vh] ml-[10px] h-[6vh]"
        />
      </a>
      <Nav whenChange={handleNavChange} />
      <Home change={change} />
      <About change={change} />

      <Blogs change={change} />
      <Contact change={change} />
      <Footer/>
    </main>
  )
}
export default App