export const movies = [
  { id: 1, title: "Lost Girls and Love Hotels (2020) BluRay", year: "2020", badge: "MOVIE", rating: "7.4", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", industry: "Hollywood" },
  { id: 2, title: "Chhatriwali (2023) Hindi WEB-DL", year: "2023", badge: "MOVIE", rating: "7.1", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", industry: "Bollywood" },
  { id: 3, title: "New Action Thriller (2024)", year: "2024", badge: "MOVIE", rating: "8.2", img: "https://images.unsplash.com/photo-1535016120720-40c74676578c?q=80&w=800&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", industry: "Hollywood" },
  { id: 101, title: "Bangla Movie", year: "2023", rating: "8.0", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=300&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", industry: "Bollywood", badge: "FEATURE" },
  { id: 102, title: "Dhurandhar (2025)", year: "2025", rating: "8.5", img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=300&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", industry: "Bollywood", badge: "FEATURE" },
  { id: 103, title: "Ustaad Bhagat Singh", year: "2026", rating: "7.9", img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=300&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", industry: "Bollywood", badge: "FEATURE" },
  { id: 104, title: "Sambhavam", year: "2026", rating: "8.6", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=300&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", industry: "Bollywood", badge: "FEATURE" },
  { id: 201, title: "Queen of Tears", year: "2024", rating: "8.8", img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=300&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", industry: "K-Drama", badge: "DRAMA" },
  { id: 202, title: "The Glory", year: "2022", rating: "8.4", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=300&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", industry: "K-Drama", badge: "DRAMA" },
];

export const topSliderData = movies.slice(0, 3);
export const featuredData = movies.filter((m) => m.id >= 101 && m.id <= 104);

export const actorsData = [
  { id: 1, name: "Scarlett Johansson", industry: "Hollywood", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop", bio: "Famous for playing Black Widow in Marvel movies." },
  { id: 2, name: "Deepika Padukone", industry: "Bollywood", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop", bio: "One of the highest-paid actresses in India." },
  { id: 3, name: "Angelina Jolie", industry: "Hollywood", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop", bio: "Academy Award-winning actress and filmmaker." },
  { id: 4, name: "Alia Bhatt", industry: "Bollywood", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop", bio: "Known for her versatile acting in Hindi cinema." },
  { id: 5, name: "Margot Robbie", industry: "Hollywood", img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=400&auto=format&fit=crop", bio: "Popularly known for her role as Harley Quinn and Barbie." },
  { id: 6, name: "Song Hye-kyo", industry: "K-Drama", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop", bio: "Leading Korean actress known for The Glory and Descendants of the Sun." },
  { id: 7, name: "Kim Ji-won", industry: "K-Drama", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop", bio: "Star of Queen of Tears and Fight for My Way." },
];

export const newsArticles = [
  { id: 1, title: "Viral red carpet looks from last weekend", date: "Nov 6, 2026", tag: "Fashion", excerpt: "The most shared celebrity looks of the week, from premieres to street style." },
  { id: 2, title: "Upcoming K-Drama slate you should watch", date: "Nov 4, 2026", tag: "K-Drama", excerpt: "A short list of new series generating the most search and social buzz." },
  { id: 3, title: "Bollywood box office roundup", date: "Nov 2, 2026", tag: "Bollywood", excerpt: "Which new releases are trending with audiences this month." },
  { id: 4, title: "Hollywood awards season watchlist", date: "Oct 30, 2026", tag: "Hollywood", excerpt: "Actors and films already dominating conversation heading into awards season." },
];

export const getActorById = (id) =>
  actorsData.find((actor) => String(actor.id) === String(id));

export const getMovieById = (id) =>
  movies.find((movie) => String(movie.id) === String(id));

export const moviesByIndustry = (industry) =>
  movies.filter((movie) => movie.industry === industry);

export const galleryItems = [
  { id: 1, type: "photo", title: "Premiere night", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop" },
  { id: 2, type: "photo", title: "Studio portrait", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
  { id: 3, type: "photo", title: "Street fashion", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" },
  { id: 4, type: "photo", title: "Festival stage", img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop" },
  { id: 5, type: "video", title: "Trailer cut", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 6, type: "video", title: "Behind the scenes", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 7, type: "video", title: "Interview clip", img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=800&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 8, type: "video", title: "Fan event", img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800&auto=format&fit=crop", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
];
