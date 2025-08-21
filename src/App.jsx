import "./index.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";


import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Watched from "./pages/Watched";
import Navbar from "./components/Navbar";
import SearchPg from "./pages/SearchPg";
import Detail from "./pages/Detail";
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
            <Route path ="/anime/:id" element={<Detail/>}/>
          </Routes>
           </div>
      </div>
    </>
  );
}

export default App;
