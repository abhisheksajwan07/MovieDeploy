import { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-200 p-8 ">
      <h1 className="text-2xl text-white font-bold ">
        <i className="text-[#6556CD] ri-tv-fill mr-3"></i>
        <span className="text-2xl">SCSDB.</span>
      </h1>
      <nav className="flex flex-col text-zinc-300 text-xl gap-4">
        <h1 className="text-white font-semibold text-xl mt-8 mb-2">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-md">
          <i className=" mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-md">
          <i className=" mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-md">
          <i className=" mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link to="/tvshows" className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-md">
          <i className=" mr-2 ri-tv-2-fill"></i>
          TV shows
        </Link>
        <Link to="/person" className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-md">
          <i className=" mr-2 ri-team-fill"></i>
          Actors
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-200 mt-3" />
      <nav className="text-xl text-zinc-200 mt-5 flex flex-col gap-5">
        <h1 className="text-white font-semibold ">Website Information</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-md">
          <i className="mr-2 ri-information-fill"></i>
          About Site
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-md">
          <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
