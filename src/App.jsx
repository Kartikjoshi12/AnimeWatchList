import "./index.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";


import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Watched from "./pages/Watched";
import Navbar from "./components/Navbar";
import SearchPg from "./components/SearchPg";

function App() {
  return (
    <>
      <div className="bodymain">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Watched" element={<Watched />} />{" "}
            <Route path="/Admin" element={<Admin />} />
            <Route path ="/search/:query" element={<SearchPg/>}/>
          </Routes>
           </div>
      </div>
    </>
  );
}

export default App;
