import Nav from "./components/Nav"
import { useState } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";
const App = () => {
  const [change, setChange] = useState('0');
  const handleNavChange = (newValue) => {
    setChange(newValue);
  };
return (
    <main>
      <Nav whenChange={handleNavChange}/>
      <Home change = {change}/>
      <About change={change}/>
      <Projects change={change}/>
      <Blogs change={change}/>
      <Contact change={change}/>
    </main> 
  )
}
export default App