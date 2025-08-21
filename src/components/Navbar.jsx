import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import "../css/search.css";
import "../css/navbar.css"
import logo from "../assets/favicon (4).ico";

function Navbar() {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();
  const handleSearchChange = (e) => {
       e.preventDefault();
       const q  = query.trim();
       if(!q) return;

       navigate(`/search/${encodeURIComponent(q)}`)
       setQuery("");
  };
 const handleInputChange=(e)=>{
  setQuery(e.target.value)
 }
  return (
    <>
<div>
  <nav className="navbar">
    {/* Logo */}
    <Link to="/">
      <img className="logo logo-img-fav" src={logo} alt="Logo" />
    </Link>

    {/* Nav Links */}
    <Link to="/" className="nav-link">
      Home
    </Link>
    <Link to="/Watched" className="nav-link">
      Watched
    </Link>
    <Link to="/Admin" className="nav-link">
      Admin
    </Link>

    {/* Search Section */}
    <div className="search-container">
      {showSearch && (
    <form action="submit" onSubmit={handleSearchChange}>
          <input
          type="text"
          placeholder="Search anime..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
    </form>
      )}
      <FiSearch
        size={22}
        className="search-icon"
        onClick={() => setShowSearch(!showSearch)}
      />
    </div>
  </nav>
</div>

    </>
  );
}

export default Navbar;
