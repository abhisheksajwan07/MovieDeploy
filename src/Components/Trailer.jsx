import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
const Trailer = () => {
  const { pathname } = useLocation();
  const Navigate = useNavigate();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
    <div className="bg-[rgba(0,0,0,.9)] h-screen w-screen absolute  left-0 top-0 flex justify-center items-center">
      {ytvideo ? (
        <ReactPlayer controls
          height={600}
          width={1200}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <NotFound />
      )}
      <Link
        onClick={() => Navigate(-1)}
        className="hover:text-[#6556CD] text-3xl text-white ri-close-fill absolute top-[4%] right-[4%]"
      ></Link>
    </div>
  );
};

export default Trailer;
