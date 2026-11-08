import { useNavigate } from "react-router-dom";
import { movies } from "../data/siteData";

const Trending = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Trending</h1>
      <p className="text-gray-400 mb-8">Most clicked titles on Viral Link.Ai right now.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => navigate(`/play/${item.id}`, { state: { movie: item } })}
            className="text-left bg-slate-900/60 rounded-xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all group"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <span className="absolute top-2 left-2 bg-pink-600 text-white text-[10px] font-bold px-2 py-1 rounded">{item.badge || "HD"}</span>
            </div>
            <div className="p-3">
              <h3 className="text-white font-semibold text-sm line-clamp-1 group-hover:text-pink-400">{item.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{item.year} · ★ {item.rating}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Trending;
