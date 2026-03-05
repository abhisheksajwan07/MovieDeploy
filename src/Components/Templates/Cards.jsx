import  { lazy } from "react";
import { Link } from "react-router-dom";
import noimage from "../../assets/noimage.jpg";
const Cards = ({ data, title }) => {
  console.log(data);
  console.log(title);
  return (
    <div className="flex flex-wrap mx-auto max-w-[90%] py-5  h-full px-[5%] bg-[#1F1E24]">
      {Array.isArray(data) &&
        data?.map((c, i) => (
          <Link
            to={`/${c.media_type || title}/details/${c.id}`}
            key={i}
            className="relative  w-[33vh] mr-[5%] mb-[5%]"
          >
            {/* kahi like in popularcomponent ki api fetch ke data m jagah media type aanahi rha isliye ham title use karrhe */}
            {/* like trending m alwaysmedia type aata */}
            <img
              loading="lazy"
              className="h-[25vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
              src={
                c.backdrop_path || c.posters_path || c.profile_path
                  ? `https://image.tmdb.org/t/p/original${c.backdrop_path || c.posters_path || c.profile_path}`
                  : noimage
              }
            />
            <h1 className="text-xl text-zinc-200 mt-3 font-semfold ">
              {c.name || c.title || c.original_name || c.original_title}
            </h1>
            {c.vote_average && (
              <div
                className="absolute right-[-10%] bottom-[40%] rounded-full text-xl font-semibold
             bg-yellow-600 text-white w-[6vh] h-[6vh] flex justify-center items-center"
              >
                {(c.vote_average * 10).toFixed()} <sup>%</sup>
              </div>
            )}
          </Link>
        ))}
    </div>
  );
};

export default Cards;
