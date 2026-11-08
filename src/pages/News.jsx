import { newsArticles } from "../data/siteData";

const News = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">News</h1>
      <p className="text-gray-400 mb-8">Celebrity headlines, premieres, and industry roundups.</p>
      <div className="grid md:grid-cols-2 gap-5">
        {newsArticles.map((article) => (
          <article key={article.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-pink-500/40 transition-colors">
            <span className="text-xs font-bold text-pink-400 uppercase tracking-wide">{article.tag}</span>
            <h2 className="text-xl font-bold text-white mt-2 mb-2">{article.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
            <p className="text-xs text-gray-500">{article.date}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
