import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  console.log(data);
  return (
    <div
      className="w-full h-[50vh] p-[5%] flex flex-col justify-center items-center"
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.posters_path || data.profile_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgrroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="w-[80%] text-5xl font-black text-white">
          {data.name || data.title || data.origial_title}
        </h1>
        <p className="text-white font-semibold w-[80%] mt-3 ">
          {data.overview.slice(0, 200)} ...{" "}
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="text-blue-400"
          >
            more
          </Link>
        </p>
        <p className="text-white mt-4 ">
          <span>
            <i className="text-yellow-500 ri-megaphone-fill mr-1"></i>
            {data.release_date || "No Information"}
          </span>
          <span className=" ml-8">
            <i className="text-yellow-500 ri-album-fill mr-1"></i>
            {data.media_type?.toUpperCase() || " No Information"}
          </span>
        </p>
        <Link
          to={`${data.media_type}/details/${data.id}/trailer`}
          className="p-4 inline-block bg-[#6556cd] text-xl text-white rounded-md font-semibold mt-5"
        >
          Watch Trailer
        </Link>
      </div>
    </div>
  );
};

export default Header;
