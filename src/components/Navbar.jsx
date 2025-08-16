import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/search.css";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/favicon (4).ico"; // ✅ better way to load favicon

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    console.log("Searching for:", value); // ✅ for now, just log it
  };

  return (
    <>
      <div>
        <nav className="bg-black flex items-center justify-evenly p-2 font-mono">
          {/* Logo */}
          <Link to="/">
            <img className="w-8 h-8" src={logo} alt="Logo" />
          </Link>

          {/* Nav Links */}
          <Link to="/" className="text-red-50 hover:text-red-300">
            Home
          </Link>
          <Link to="/Watched" className="text-pink-50 hover:text-red-300">
            Watched
          </Link>
          <Link to="/Admin" className="text-pink-50 hover:text-red-300">
            Admin
          </Link>

          {/* Search Section */}
          <div className="flex items-center gap-2">
            {showSearch && (
              <input
                type="text"
                placeholder="Search anime..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="border p-1 rounded text-black"
              />
            )}
            <FiSearch
              size={22}
              className="text-white cursor-pointer hover:drop-shadow-[0_0_6px_#fff]"
              onClick={() => setShowSearch(!showSearch)}
            />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
