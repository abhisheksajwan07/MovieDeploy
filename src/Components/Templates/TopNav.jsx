import { useEffect, useState } from "react";
import axios from "../Utils/axios";
import { Link } from "react-router-dom";
import noimage from "../../assets/noimage.jpg";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data)
      setSearches(data.results);

      console.log(data);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[10%] ">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        style={{ width: "400px" }}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent "
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="absolute z-[100] max-h-[50vh] w-[40%] rounded-md bg-zinc-200 top-full overflow-auto left-[5%] ">
        {searches.map((s, index) => (
          <Link 
          to={`/${s.media_type}/details/${s.id}`}
            key={index}
            className=" hover:text-black hover:bg-zinc-300 duration-300 flex justify-start items-center border-b-2 border-zinc-100   p-9 w-full "
          >
            <img
              className="h-[12vh] w-[14vh] rounded-md border-none mr-5 object-cover shadow-lg "
              src={
                s.backdrop_path || s.posters_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original${s.backdrop_path || s.posters_path || s.profile_path}`
                  : noimage
              }
              alt=""
            />
            <span>{s.name || s.title || s.origial_title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
