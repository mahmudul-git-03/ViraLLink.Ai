import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [actorsDropdownOpen, setActorsDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  
  // Mobile/Toggle dropdown states
  const [mobileActorsOpen, setMobileActorsOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setMobileActorsOpen(false);
      setMobileGalleryOpen(false);
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-500 pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="backdrop-blur-xl bg-black/30 border border-white/10 shadow-[0_8px_32px_0_rgba(255,20,147,0.15)] rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center transition-all duration-500 hover:bg-black/40 hover:shadow-[0_8px_32px_0_rgba(255,20,147,0.3)]">
          
          {/* Left: Brand Name */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-xl sm:text-2xl lg:text-4xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-600 to-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] hover:drop-shadow-[0_0_20px_rgba(236,72,153,1)] hover:scale-105 transition-all duration-500 inline-block font-serif uppercase"
            >
              Viral Link.Ai
            </Link>
          </div>

          {/* Middle: Desktop Navlist */}
          <nav className="hidden md:flex space-x-6 lg:space-x-10 items-center">
            
            {/* Home */}
            <Link to="/" className="text-gray-200 font-bold hover:text-pink-400 transition-all duration-300 relative group text-sm lg:text-lg">
              <span className="inline-block hover:-translate-y-1 transition-transform duration-300">Home</span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 ${isActive('/') ? 'w-full shadow-[0_0_10px_#ec4899]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_10px_#ec4899]'}`}></span>
            </Link>

            {/* Actors Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActorsDropdownOpen(true)}
              onMouseLeave={() => setActorsDropdownOpen(false)}
            >
              <button className="text-gray-200 font-bold hover:text-pink-400 transition-all duration-300 flex items-center gap-1 text-sm lg:text-lg">
                <span className="inline-block group-hover:-translate-y-1 transition-transform duration-300">Actors</span>
                <svg className={`w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 ${actorsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 rounded-xl backdrop-blur-2xl bg-black/80 border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 transform origin-top ${actorsDropdownOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                <Link to="/actors" className="block px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 hover:pl-6">All actors</Link>
                <Link to="/hollywood" className="block px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 hover:pl-6">Hollywood</Link>
                <Link to="/bollywood" className="block px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 hover:pl-6">Bollywood</Link>
                <Link to="/k-drama" className="block px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 hover:pl-6">K-Drama</Link>
              </div>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 ${isActive('/hollywood') || isActive('/bollywood') || isActive('/k-drama') || isActive('/actors') ? 'w-full shadow-[0_0_10px_#ec4899]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_10px_#ec4899]'}`}></span>
            </div>

            {/* Trending */}
            <Link to="/trending" className="text-gray-200 font-bold hover:text-pink-400 transition-all duration-300 relative group text-sm lg:text-lg">
              <span className="inline-block hover:-translate-y-1 transition-transform duration-300">Trending</span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 ${isActive('/trending') ? 'w-full shadow-[0_0_10px_#ec4899]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_10px_#ec4899]'}`}></span>
            </Link>
            
            {/* Gallery Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setGalleryDropdownOpen(true)}
              onMouseLeave={() => setGalleryDropdownOpen(false)}
            >
              <button className="text-gray-200 font-bold hover:text-pink-400 transition-all duration-300 flex items-center gap-1 text-sm lg:text-lg">
                <span className="inline-block group-hover:-translate-y-1 transition-transform duration-300">Gallery</span>
                <svg className={`w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 ${galleryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-40 rounded-xl backdrop-blur-2xl bg-black/80 border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 transform origin-top ${galleryDropdownOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                <Link to="/gallery/photo" className="block px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 hover:pl-6">Photo</Link>
                <Link to="/gallery/video" className="block px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 hover:pl-6">Video</Link>
              </div>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 ${isActive('/gallery') ? 'w-full shadow-[0_0_10px_#ec4899]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_10px_#ec4899]'}`}></span>
            </div>

            {/* News */}
            <Link to="/news" className="text-gray-200 font-bold hover:text-pink-400 transition-all duration-300 relative group text-sm lg:text-lg">
              <span className="inline-block hover:-translate-y-1 transition-transform duration-300">News</span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 ${isActive('/news') ? 'w-full shadow-[0_0_10px_#ec4899]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_10px_#ec4899]'}`}></span>
            </Link>

            {/* VIP */}
            <Link to="/vip" className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-black hover:scale-110 transition-all duration-300 relative group text-sm lg:text-lg drop-shadow-md">
              <span className="inline-block hover:-translate-y-1 transition-transform duration-300">VIP 👑</span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 ${isActive('/vip') ? 'w-full shadow-[0_0_10px_#eab308]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_10px_#eab308]'}`}></span>
            </Link>
          </nav>

          {/* Right: ion-icon (Visible on ALL screens) */}
          <div className="flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-200 hover:text-pink-400 focus:outline-none transition-transform duration-500 hover:scale-110 flex items-center justify-center"
            >
              <ion-icon 
                name={isOpen ? "close-outline" : "reorder-three-outline"} 
                style={{ fontSize: '32px', filter: 'drop-shadow(0px 0px 5px rgba(255,255,255,0.5))' }}
              ></ion-icon>
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Mobile & PC */}
        <div className={`mt-2 rounded-2xl backdrop-blur-3xl bg-black/90 border border-white/10 shadow-[0_10px_40px_0_rgba(255,20,147,0.3)] overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-6 flex flex-col space-y-2">
            <Link to="/" onClick={toggleMenu} className="text-gray-200 hover:text-pink-400 hover:bg-white/5 rounded-lg font-bold px-4 py-3 transition-all duration-300 text-lg">Home</Link>
            
            {/* Actors Dropdown in Menu */}
            <div>
              <button 
                onClick={() => setMobileActorsOpen(!mobileActorsOpen)} 
                className="w-full flex justify-between items-center text-gray-200 hover:text-pink-400 hover:bg-white/5 rounded-lg font-bold px-4 py-3 transition-all duration-300 text-lg"
              >
                Actors
                <svg className={`w-5 h-5 transition-transform duration-300 ${mobileActorsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileActorsOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col space-y-1 pl-8 py-2 bg-black/40 rounded-lg mt-1">
                  <Link to="/actors" onClick={toggleMenu} className="text-gray-300 hover:text-pink-400 py-2 transition-colors">All actors</Link>
                  <Link to="/hollywood" onClick={toggleMenu} className="text-gray-300 hover:text-pink-400 py-2 transition-colors">Hollywood</Link>
                  <Link to="/bollywood" onClick={toggleMenu} className="text-gray-300 hover:text-pink-400 py-2 transition-colors">Bollywood</Link>
                  <Link to="/k-drama" onClick={toggleMenu} className="text-gray-300 hover:text-pink-400 py-2 transition-colors">K-Drama</Link>
                </div>
              </div>
            </div>

            <Link to="/trending" onClick={toggleMenu} className="text-gray-200 hover:text-pink-400 hover:bg-white/5 rounded-lg font-bold px-4 py-3 transition-all duration-300 text-lg">Trending</Link>
            
            {/* Gallery Dropdown in Menu */}
            <div>
              <button 
                onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)} 
                className="w-full flex justify-between items-center text-gray-200 hover:text-pink-400 hover:bg-white/5 rounded-lg font-bold px-4 py-3 transition-all duration-300 text-lg"
              >
                Gallery
                <svg className={`w-5 h-5 transition-transform duration-300 ${mobileGalleryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileGalleryOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col space-y-1 pl-8 py-2 bg-black/40 rounded-lg mt-1">
                  <Link to="/gallery/photo" onClick={toggleMenu} className="text-gray-300 hover:text-pink-400 py-2 transition-colors">Photo</Link>
                  <Link to="/gallery/video" onClick={toggleMenu} className="text-gray-300 hover:text-pink-400 py-2 transition-colors">Video</Link>
                </div>
              </div>
            </div>

            <Link to="/news" onClick={toggleMenu} className="text-gray-200 hover:text-pink-400 hover:bg-white/5 rounded-lg font-bold px-4 py-3 transition-all duration-300 text-lg">News</Link>
            <Link to="/vip" onClick={toggleMenu} className="text-yellow-500 hover:text-yellow-400 hover:bg-white/5 rounded-lg font-black px-4 py-3 transition-all duration-300 text-lg">VIP Access 👑</Link>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;