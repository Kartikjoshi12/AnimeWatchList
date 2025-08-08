import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div>
        <nav className=" bg-black flex items-center justify-evenly p-1 font-mono">
            <Link to ="/" className=" text-red-50 hover:text-red-300"> Home </Link>
            <Link to ="/Watched" className=" text-pink-50 hover:text-red-300"> Watched </Link>
            <Link to ="/Admin"className=" text-pink-50 hover:text-red-300" > Admin </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;