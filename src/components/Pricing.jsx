import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for testing your idea and first clients.",
    features: ["No monthly fees", "Invoices & receipts", "Basic analytics"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "1.2% + $0.20",
    description: "Best for growing service businesses and agencies.",
    features: [
      "Custom branding",
      "Saved payment methods",
      "Priority support",
      "Tax & currency handling",
    ],
    cta: "Get Pro",
    highlight: true,
  },
  {
    name: "Scale",
    price: "Contact us",
    description: "For high-volume providers needing SLAs and custom terms.",
    features: ["Volume discounts", "Dedicated manager", "Advanced fraud tools"],
    cta: "Talk to sales",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple, usage-based pricing</h2>
          <p className="mt-3 text-slate-700">Pay as you earn. We grow only when you do.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 shadow-sm ${
                tier.highlight
                  ? "border-blue-500/30 bg-gradient-to-br from-white to-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">{tier.price}</p>
              <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm ${
                tier.highlight
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                  : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
