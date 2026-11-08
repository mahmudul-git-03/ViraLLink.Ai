import { useNavigate, useParams } from "react-router-dom";
import { galleryItems } from "../data/siteData";

const Gallery = () => {
  const { type = "photo" } = useParams();
  const navigate = useNavigate();
  const kind = type === "video" ? "video" : "photo";
  const items = galleryItems.filter((item) => item.type === kind);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{kind === "video" ? "Video gallery" : "Photo gallery"}</h1>
          <p className="text-gray-400 mt-1">Premiere stills, portraits, and clip covers.</p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => navigate("/gallery/photo")} className={`px-4 py-2 rounded-full text-sm font-semibold ${kind === "photo" ? "bg-pink-600 text-white" : "bg-slate-800 text-gray-300"}`}>Photo</button>
          <button type="button" onClick={() => navigate("/gallery/video")} className={`px-4 py-2 rounded-full text-sm font-semibold ${kind === "video" ? "bg-pink-600 text-white" : "bg-slate-800 text-gray-300"}`}>Video</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (item.videoUrl) navigate(`/play/${item.id}`, { state: { movie: { ...item, year: "2024", badge: "GALLERY" } } });
            }}
            className="relative rounded-xl overflow-hidden border border-white/10 group aspect-[3/4]"
          >
            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-3 text-left">
              <p className="text-white text-sm font-semibold">{item.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
