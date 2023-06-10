import "./styles/App.scss"
import Heading from './components/Heading';
import "./styles/Heading.scss"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Brands from './components/Brands.js'
import Services from './components/Services.js'
import Footer from './components/Footer.js'



import "./styles/Home.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/Services.scss"
import "./styles/mediaquery.scss"

function App() {
  return (
    <Router>
     
     <Heading/>
    
     <Routes>

      <Route path="/" element = {<Home/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/brands" element = {<Brands/>} />
      <Route path="/services" element = {<Services/>} />
      <Route path="/*" element = {<div>Page Not Found 404</div>} />
      
     </Routes>
    
    <Footer/>
    
    </Router>
  );
}

export default App;
