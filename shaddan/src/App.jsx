import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Qualitypolicy from "./Pages/Qualitypolicy";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/qualitypolicy" element={<Qualitypolicy/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
