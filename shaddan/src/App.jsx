import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <>

    <Router>
          <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>

      <h1>Shaddan </h1>
    </>
  );
}

export default App;
