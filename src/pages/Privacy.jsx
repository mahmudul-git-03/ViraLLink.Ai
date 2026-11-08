const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto text-white space-y-5">
      <p className="text-pink-400 font-semibold">Legal</p>
      <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
      <p className="text-gray-400 text-sm">Last updated: November 8, 2026</p>
      <p className="text-gray-300 leading-relaxed">
        Viral Link.Ai currently runs as a frontend demo. We do not operate a production backend, user accounts, or paid analytics on this build.
      </p>
      <h2 className="text-xl font-bold pt-2">What we collect</h2>
      <p className="text-gray-300 leading-relaxed">
        Contact and newsletter fields are shown in the UI only. Submissions stay in the browser unless you later connect a server.
      </p>
      <h2 className="text-xl font-bold pt-2">Cookies</h2>
      <p className="text-gray-300 leading-relaxed">
        This demo does not set marketing cookies. Your browser may still store local data used by the development server.
      </p>
      <h2 className="text-xl font-bold pt-2">Third-party media</h2>
      <p className="text-gray-300 leading-relaxed">
        Placeholder images and sample videos load from public CDNs. Those providers may log standard request data.
      </p>
    </div>
  );
};

export default Privacy;
