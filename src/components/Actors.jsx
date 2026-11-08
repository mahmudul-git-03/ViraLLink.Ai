import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { actorsData } from "../data/siteData";

const pathIndustry = {
  "/hollywood": "Hollywood",
  "/bollywood": "Bollywood",
  "/k-drama": "K-Drama",
};

const Actors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setFilter(pathIndustry[location.pathname] || "All");
    setSearchTerm("");
  }, [location.pathname]);

  const filteredActors = actorsData.filter((actor) => {
    const matchSearch = actor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filter === "All" || actor.industry === filter;
    return matchSearch && matchFilter;
  });

  const industryPath = {
    All: "/actors",
    Hollywood: "/hollywood",
    Bollywood: "/bollywood",
    "K-Drama": "/k-drama",
  };

  const handleIndustry = (cat) => {
    navigate(industryPath[cat]);
  };

  const handleActorClick = (actor) => {
    navigate(`/actor/${actor.id}`);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Popular <span className="text-pink-500">Actors</span>
      </h1>

      <div className="max-w-4xl mx-auto mb-10 space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
        <div className="flex gap-3">
          {["All", "Hollywood", "Bollywood", "K-Drama"].map((cat) => (
            <button
              key={cat}
              onClick={() => handleIndustry(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-pink-600 text-white shadow-[0_0_10px_#ec4899]"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search actors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-white/20 text-white px-4 py-2 pl-10 rounded-full focus:outline-none focus:border-pink-500 transition-colors"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredActors.length > 0 ? (
          filteredActors.map((actor) => (
            <div
              key={actor.id}
              onClick={() => handleActorClick(actor)}
              className="bg-slate-900 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-pink-500 transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="h-[250px] overflow-hidden">
                <img src={actor.img} alt={actor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-lg group-hover:text-pink-400 transition-colors">{actor.name}</h3>
                <span className="text-xs text-gray-400 bg-slate-800 px-2 py-1 rounded-md mt-2 inline-block">{actor.industry}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 py-10">
            No actors found. Try a different search!
          </div>
        )}
      </div>
    </div>
  );
};

export default Actors;