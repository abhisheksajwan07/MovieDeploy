import { Link } from "react-router-dom";

import noimage from "../../assets/noimage.jpg"

const HorizontalCards = ({ data, title }) => {
  console.log("HorizontalCards received data:", data);
  return (
    <div className="w-[100%] flex h-[40vh] overflow-x-auto mt-2 p-3">
      {data?.length > 0 && Array.isArray(data) ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type ? d.media_type : title || "tv"}/details/${d.id}`}
            key={i}
            className="min-w-[15%] h-[30vh]  bg-zinc-900   mr-5 overflow-y-auto mb-4"
          >
            <img
              src={
                d.backdrop_path || d.posters_path
                  ? `https://image.tmdb.org/t/p/original${d.backdrop_path || d.posters_path}`
                  : noimage
              }
              alt=""
            />
            <h1 className="p-1 text-white font-semibold text-xl">
              {d.title || d.name || d.original_name || d.original_title}
            </h1>
            <p className=" mt-1 mb-3 text-white">
              {d.overview.slice(0, 70)}..
              <span className="text-blue-500">more</span>
            </p>
          </Link>
        ))
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
};

export default HorizontalCards;
