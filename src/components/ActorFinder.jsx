import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { actorsData } from "../data/siteData";

const industries = [
  { label: "Hollywood", path: "/hollywood", hint: "US & UK stars" },
  { label: "Bollywood", path: "/bollywood", hint: "Hindi cinema" },
  { label: "K-Drama", path: "/k-drama", hint: "Korean series" },
];

const hiddenOn = ["/actors", "/hollywood", "/bollywood", "/k-drama"];

const ActorFinder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const hide =
    hiddenOn.includes(location.pathname) || location.pathname.startsWith("/actor/");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actorsData;
    return actorsData.filter(
      (actor) =>
        actor.name.toLowerCase().includes(q) ||
        actor.industry.toLowerCase().includes(q) ||
        actor.bio.toLowerCase().includes(q)
    );
  }, [query]);

  if (hide) return null;

  return (
    <section id="find-actors" className="border-t border-white/10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <p className="text-pink-400 font-semibold mb-1">Browse talent</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Search actors</h2>
            <p className="text-gray-400 mt-2">Type a name, then open a card for the full profile.</p>
          </div>
          <div className="relative w-full md:w-96">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or industry..."
              className="w-full bg-slate-900 border border-white/15 text-white px-4 py-3 pl-11 rounded-2xl focus:outline-none focus:border-pink-500"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {industries.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => navigate(item.path)}
              className="text-left rounded-2xl border border-white/10 bg-white/5 hover:border-pink-500/60 hover:bg-pink-500/10 p-5 transition-all"
            >
              <p className="text-white font-bold text-lg">{item.label}</p>
              <p className="text-gray-400 text-sm mt-1">{item.hint} — open this page</p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {results.length > 0 ? (
            results.map((actor) => (
              <button
                key={actor.id}
                type="button"
                onClick={() => navigate(`/actor/${actor.id}`)}
                className="text-left bg-slate-900 rounded-xl overflow-hidden border border-white/10 hover:border-pink-500 transition-all hover:-translate-y-1 group"
              >
                <div className="h-40 overflow-hidden">
                  <img src={actor.img} alt={actor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-semibold line-clamp-1 group-hover:text-pink-400">{actor.name}</h3>
                  <p className="text-[11px] text-gray-400 mt-1">{actor.industry}</p>
                </div>
              </button>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400 py-8">No actors match that search.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ActorFinder;
