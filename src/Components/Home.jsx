import { useEffect, useState } from "react";
import SideNav from "./Templates/SideNav";
import TopNav from "./Templates/TopNav";
import axios from "./Utils/axios";
import Header from "./Templates/Header";
import HorizontalCards from "./Templates/HorizontalCards.jsx";
import DropDown from "./Templates/DropDown";
import Loader from "./Loader";
const Home = () => {
  document.title = "Movie Site | HomePage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      console.log(randomData);
      setWallpaper(randomData);
    } catch (err) {
      console.log("error: ", err);
    }
  };
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      console.log(data)
      setTrending(data.results);
    } catch (err) {
      console.log("error: ", err);
    }
  };
  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper();
  }, [category]);
  console.log(trending);
  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-x-hidden overflow-auto">
        <TopNav />
        <Header data={wallpaper} />
        <div className="flex justify-between p-5">
          <h1 className="text-3xl font-semibold text-zinc-300">Trending</h1>
          <DropDown
            title="Filter"
            options={["tv", "movie", "All"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending}  />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
