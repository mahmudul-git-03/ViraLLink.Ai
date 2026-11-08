const plans = [
  { name: "Starter", price: "Free", perks: ["Home feed", "Public news", "Actor profiles"] },
  { name: "VIP", price: "$4.99/mo", perks: ["Ad-light layout", "Early trailers", "HD gallery"], highlight: true },
  { name: "Elite", price: "$9.99/mo", perks: ["All VIP perks", "Priority support", "Exclusive recaps"] },
];

const Vip = () => {
  return (
    <div className="text-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-black mb-3">
          VIP <span className="text-yellow-400">Access</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">Unlock a cleaner feed and earlier drops. Checkout is not connected yet — this is the membership UI.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-6 border ${plan.highlight ? "border-yellow-400/60 bg-yellow-400/10 shadow-[0_0_30px_rgba(234,179,8,0.15)]" : "border-white/10 bg-white/5"}`}
          >
            <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
            <p className={`text-2xl font-black mb-4 ${plan.highlight ? "text-yellow-400" : "text-pink-400"}`}>{plan.price}</p>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              {plan.perks.map((perk) => (
                <li key={perk}>• {perk}</li>
              ))}
            </ul>
            <button type="button" className={`w-full py-2.5 rounded-xl font-bold ${plan.highlight ? "bg-yellow-400 text-black" : "bg-pink-600 text-white"}`}>
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vip;
