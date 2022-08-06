import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const NavBar = () => {
  return (
    <nav className="bg-transparent flex justify-between items-center py-3 fixed top-0 w-full text-white shadow h-14 z-50">
      <div className="logo w-1/6">
        <h1 className="heading">Publishers</h1>
      </div>
      <div className="w-3/6 flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/products">Product</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
      <div className="searchBar w-2/6 h-8 flex justify-center ">
        <div className="shadow flex w-3/4 border-red-100 h-3/4 bg-white/[0.4] rounded border">
          <AiOutlineSearch className=" h-auto ml-1" />
          <input type="text" className="inline bg-transparent w-full " />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
