import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start items-center border border-solid border-gray-300 flex-grow px-2 rounded-md bg-white outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate("/")}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user?._id}`} className="hidden md:block">
          <img src={user?.image} alt="user" className="w-12 h-12 rounded-lg" />
        </Link>
        <Link to="/create-pin" className="bg-black text-white rounded-lg w-12 h-12 md:w-12 md:h-12 flex justify-center items-center">
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
