import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center text-white py-20">
      <h1 className="text-6xl font-black text-pink-500 mb-4">404</h1>
      <p className="text-gray-400 mb-6">That page is not on Viral Link.Ai.</p>
      <Link to="/" className="inline-block bg-pink-600 hover:bg-pink-500 font-bold px-6 py-3 rounded-xl">Back home</Link>
    </div>
  );
};

export default NotFound;
