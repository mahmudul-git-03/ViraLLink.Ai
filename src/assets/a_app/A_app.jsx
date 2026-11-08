import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ActorFinder from "../../components/ActorFinder";
import ScrollToTop from "../../components/ScrollToTop";
import Home from "../../components/Home";
import Actors from "../../components/Actors";
import VideoPlayer from "../../pages/VideoPlayer";
import ActorDetails from "../../pages/ActorDetails";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";
import Terms from "../../pages/Terms";
import Trending from "../../pages/Trending";
import News from "../../pages/News";
import Vip from "../../pages/Vip";
import Gallery from "../../pages/Gallery";
import NotFound from "../../pages/NotFound";

function A_app() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] font-sans selection:bg-pink-500 selection:text-white">
                <Navbar />

                <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/play/:id" element={<VideoPlayer />} />
                        <Route path="/actors" element={<Actors />} />
                        <Route path="/hollywood" element={<Actors />} />
                        <Route path="/bollywood" element={<Actors />} />
                        <Route path="/k-drama" element={<Actors />} />
                        <Route path="/actor/:id" element={<ActorDetails />} />
                        <Route path="/trending" element={<Trending />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/gallery/:type" element={<Gallery />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/vip" element={<Vip />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <ActorFinder />
                <Footer />
            </div>
        </Router>
    );
}

export default A_app;
