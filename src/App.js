import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Login from './pages/Login';
import Trial from './pages/Trial';
import SignUp from './components/SignUpForm/SignUpForm';


function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/trial" element={<Trial />} />
  
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
