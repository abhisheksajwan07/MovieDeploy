import { useEffect, useState } from "react";
import {
  asyncloadperson,
  removeperson,
} from "../store/actions/personActions.jsx";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader.jsx";
import noimage from "../assets/noimage.jpg"; //
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HorizontalCards from "./Templates/HorizontalCards.jsx";
import DropDown from "./Templates/DropDown.jsx";

export const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  console.log("MovieDetail data:", info);
  const [category, setCategory] = useState("tv");
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [dispatch, id]);
  return info ? (
    <div className="px-[5%] w-screen h-screen overflow-scroll">
      <nav className="w-full text-zinc-100  h-[8vh] gap-10  flex items-center text-2xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full flex ">
        <div className="w-[15%] ">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[35vh] w-[15vw] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          {/* Sosial Media Links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>
          {/* Personal Information */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Person Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold ">Known For</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.known_for_department}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Birthday
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Deathday
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Place Of Birth
          </h1>
          <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Also Known As
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>
        <div className="w-[80%] ml-[5%]">
          <h1 className="text-5xl text-zinc-400 font-black mb-2">
            {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold ">Biography</h1>
          <p className="text-zinc-400 mt-3 ">{info.detail.biography}</p>

          <h1 className="mt-5 text-lg text-zinc-400 font-semibold ">
            Known For
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />
          <div className="w-full flex items-center justify-between mt-5 mb-2">
            <h1 className="mt-5 text-2xl text-zinc-400 font-semibold ">
              Acting
            </h1>
            <DropDown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="w-full h-[50vh] shadow-2xl overflow-x-hidden overflow-y-auto p-5 border-2 text-zinc-400 outline-none border-zinc-800 mb-3 ">
            {info[category + "Credits"].cast.map((c, i) => {
              return (<li
                key={i}
                className="hover:text-white duration-300 cursor-pointer p-3"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span>{c.name || c.title}</span>
                  <span className="block ml-5">{c.character &&
                    `character name : ${c.character}`}</span>
                </Link>
              </li>);
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};


