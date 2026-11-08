const About = () => {
  return (
    <div className="max-w-3xl mx-auto text-white">
      <p className="text-pink-400 font-semibold mb-2">Company</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About Viral Link.Ai</h1>
      <p className="text-gray-300 leading-relaxed mb-6">
        Viral Link.Ai is an entertainment front-end for discovering celebrity news, actor profiles, photos, and trailers across Hollywood, Bollywood, and K-Drama.
      </p>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { title: "Curated", text: "Trending titles and actor stories in one feed." },
          { title: "Fast", text: "A lightweight React + Tailwind experience." },
          { title: "Global", text: "Coverage across three major industries." },
        ].map((item) => (
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="font-bold text-pink-400 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-400 leading-relaxed">
        This site is a frontend demo. Media shown here is placeholder content for layout and navigation — not a live streaming catalog.
      </p>
    </div>
  );
};

export default About;
