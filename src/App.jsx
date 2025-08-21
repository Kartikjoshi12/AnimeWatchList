import "./index.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";


import Admin from "./pages/Admin.jsx";
import Home from "./pages/Home.jsx";
import Watched from "./pages/Watched.jsx";
import Navbar from "./components/Navbar.jsx";
import SearchPg from "./pages/SearchPg.jsx";
import Detail from "./pages/Detail.jsx";
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
