import { useNavigate, useParams } from "react-router-dom";
import { getActorById, moviesByIndustry } from "../data/siteData";

const industryPath = {
  Hollywood: "/hollywood",
  Bollywood: "/bollywood",
  "K-Drama": "/k-drama",
};

const ActorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const actor = getActorById(id);
  const related = actor ? moviesByIndustry(actor.industry).slice(0, 4) : [];

  if (!actor) {
    return (
      <div className="text-white text-center mt-20">
        <p className="mb-4">Actor not found.</p>
        <button type="button" onClick={() => navigate("/actors")} className="text-pink-400 font-semibold">
          Back to actors
        </button>
      </div>
    );
  }

  return (
    <div className="text-white">
      <button
        type="button"
        onClick={() => navigate(industryPath[actor.industry] || "/actors")}
        className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors mb-8"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to {actor.industry}
      </button>

      <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl p-6 md:p-10 border border-white/10 shadow-2xl flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <img
            src={actor.img}
            alt={actor.name}
            className="w-full h-full object-cover rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.3)] border-2 border-pink-500/30"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{actor.name}</h1>
          <button
            type="button"
            onClick={() => navigate(industryPath[actor.industry])}
            className="bg-pink-600 text-white text-sm font-bold px-4 py-1.5 rounded-full inline-block mb-6 hover:bg-pink-500"
          >
            {actor.industry}
          </button>

          <div className="bg-slate-800/50 p-5 rounded-xl border border-white/5 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-pink-400">Biography</h3>
            <p className="text-gray-300 leading-relaxed">
              {actor.bio} They have worked in numerous blockbuster movies and won several awards for their outstanding performances.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/trending")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-pink-500/25"
          >
            View movies
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-xl font-bold mb-4">More from {actor.industry}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((movie) => (
              <button
                key={movie.id}
                type="button"
                onClick={() => navigate(`/play/${movie.id}`)}
                className="text-left rounded-xl overflow-hidden border border-white/10 hover:border-pink-500/50"
              >
                <img src={movie.img} alt={movie.title} className="h-36 w-full object-cover" />
                <p className="text-sm p-2 line-clamp-2">{movie.title}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActorDetails;
