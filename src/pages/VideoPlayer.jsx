import { useNavigate, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../data/siteData";

const VideoPlayer = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const movieData = location.state?.movie || getMovieById(id);

  if (!movieData) {
    return (
      <div className="text-white text-center mt-16">
        <p className="mb-4">Video not found.</p>
        <button type="button" onClick={() => navigate("/")} className="text-pink-400 font-semibold">
          Back to home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-pink-500 mb-6 flex items-center gap-2 transition-colors font-semibold bg-white/5 px-4 py-2 rounded-lg w-fit"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back
        </button>

        <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.15)] border border-white/10">
          <video
            src={movieData.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain outline-none"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-8 bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">{movieData.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-300">
            {movieData.year && <span className="bg-white/10 px-4 py-1.5 rounded-full">{movieData.year}</span>}
            {movieData.rating && (
              <span className="text-yellow-400 bg-yellow-400/10 px-4 py-1.5 rounded-full flex items-center gap-1">
                ★ {movieData.rating}
              </span>
            )}
            <span className="text-pink-400 bg-pink-500/10 px-4 py-1.5 rounded-full">
              {movieData.badge || "HD Video"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
