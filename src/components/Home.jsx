import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { topSliderData, featuredData } from "../data/siteData";

const extendedFeaturedData = [...featuredData, ...featuredData];

const Home = () => {
  const topSliderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const slider = topSliderRef.current;
    if (!slider) return;

    const autoPlay = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: 600, behavior: "smooth" });
      }
    }, 3000); 

    return () => clearInterval(autoPlay);
  }, []);

  const scrollTopLeft = () => topSliderRef.current?.scrollBy({ left: -600, behavior: "smooth" });
  const scrollTopRight = () => topSliderRef.current?.scrollBy({ left: 600, behavior: "smooth" });

  const handlePlayVideo = (movie) => {
    navigate(`/play/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="w-full overflow-hidden">
      {/* গ্যারান্টেড অ্যানিমেশনের জন্য ইনলাইন স্টাইল যোগ করা হলো */}
      <style>
        {`
          @keyframes custom-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-custom {
            animation: custom-marquee 25s linear infinite;
          }
          .animate-marquee-custom:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Welcome Text */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-pulse">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Viral Link.Ai</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover the most viral and trending news about your favorite female actors worldwide.
        </p>
      </div>

      {/* Top Slider Section */}
      <div className="relative mb-16 group/topSlider">
        <button
          onClick={scrollTopLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-pink-600 text-white p-3 rounded-full opacity-0 group-hover/topSlider:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <div
          ref={topSliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {topSliderData.map((item) => (
            <div
              key={item.id}
              onClick={() => handlePlayVideo(item)}
              className="relative min-w-[100%] md:min-w-[calc(50%-8px)] h-[250px] md:h-[350px] snap-center rounded-xl overflow-hidden group cursor-pointer border border-white/10 shadow-lg flex-shrink-0"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-pink-600/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_#ec4899]">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between items-end">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white mb-1 line-clamp-1 group-hover:text-pink-400 transition-colors">{item.title}</h2>
                  <p className="text-gray-300 text-sm">{item.year}</p>
                </div>
                <span className="bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollTopRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-pink-600 text-white p-3 rounded-full opacity-0 group-hover/topSlider:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      {/* Featured Section (Continuous Smooth Scroll) */}
      <div>
        <div className="flex justify-between items-center mb-6 border-l-4 border-pink-500 pl-3">
          <h3 className="text-xl md:text-2xl font-bold text-white">Featured</h3>
        </div>

        <div className="relative flex overflow-hidden w-full bg-slate-900/50 py-4 rounded-xl border border-white/5">
          {/* এখানে কাস্টম ক্লাসটি কল করা হয়েছে */}
          <div className="flex w-max animate-marquee-custom gap-4 px-4">
            {extendedFeaturedData.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handlePlayVideo(item)}
                className="w-[200px] flex-shrink-0 group cursor-pointer bg-slate-800/40 p-2 rounded-xl border border-white/10 hover:border-pink-500/50 transition-colors duration-300"
              >
                <div className="relative rounded-lg overflow-hidden h-[280px] mb-3">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute top-0 left-0 bg-pink-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-br-lg">FEATURE</span>
                  <span className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-yellow-400 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">★ {item.rating}</span>

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <svg className="w-10 h-10 text-pink-500 drop-shadow-[0_0_8px_#ec4899]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  </div>
                </div>
                <div className="px-1 pb-1">
                  <h4 className="text-sm font-semibold text-gray-200 line-clamp-1 group-hover:text-pink-400 transition-colors">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;