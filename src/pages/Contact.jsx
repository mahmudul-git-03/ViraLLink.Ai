import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-xl mx-auto text-white">
      <p className="text-pink-400 font-semibold mb-2">Company</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
      <p className="text-gray-400 mb-8">Questions about the site, partnerships, or takedown requests — send a message.</p>

      {sent ? (
        <div className="bg-pink-500/10 border border-pink-500/30 rounded-2xl p-6 text-pink-200">
          Thanks. This is a frontend-only form, so nothing was emailed — but the flow is ready to hook up to an API later.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="name">Name</label>
            <input id="name" required className="w-full bg-slate-900 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-pink-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="email">Email</label>
            <input id="email" type="email" required className="w-full bg-slate-900 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-pink-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="message">Message</label>
            <textarea id="message" required rows={5} className="w-full bg-slate-900 border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-pink-500" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-bold py-3 rounded-xl transition-all">
            Send message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
