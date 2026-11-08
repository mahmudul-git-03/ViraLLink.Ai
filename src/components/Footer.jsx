import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-black tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 mb-3">
              Viral Link.Ai
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trending stories, actor profiles, and viral clips from Hollywood, Bollywood, and K-Drama — all in one place.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/trending" className="text-gray-400 hover:text-pink-400 transition-colors">Trending</Link></li>
              <li><Link to="/actors" className="text-gray-400 hover:text-pink-400 transition-colors">Actors</Link></li>
              <li><Link to="/hollywood" className="text-gray-400 hover:text-pink-400 transition-colors">Hollywood</Link></li>
              <li><Link to="/bollywood" className="text-gray-400 hover:text-pink-400 transition-colors">Bollywood</Link></li>
              <li><a href="/#find-actors" className="text-gray-400 hover:text-pink-400 transition-colors">Search actors</a></li>
              <li><Link to="/news" className="text-gray-400 hover:text-pink-400 transition-colors">News</Link></li>
              <li><Link to="/vip" className="text-gray-400 hover:text-pink-400 transition-colors">VIP Access</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-pink-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-pink-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Stay in the loop</h4>
            <p className="text-gray-400 text-sm mb-3">Daily viral headlines in your inbox.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 bg-slate-900 border border-white/15 text-white text-sm px-3 py-2 rounded-lg focus:outline-none focus:border-pink-500"
              />
              <button type="submit" className="bg-pink-600 hover:bg-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Viral Link.Ai. All rights reserved.</p>
          <p>Entertainment news for adults. All featured talent is 18+.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
