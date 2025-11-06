import { ShieldCheck, Zap, Globe, Receipt } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure by default",
    desc: "Bank-grade encryption, tokenization, and 3D Secure when required.",
  },
  {
    icon: Zap,
    title: "Fast checkout",
    desc: "Optimized payment flow with saved cards, Apple Pay and Google Pay.",
  },
  {
    icon: Globe,
    title: "Global reach",
    desc: "Accept 135+ currencies with automatic tax and conversion handling.",
  },
  {
    icon: Receipt,
    title: "Instant invoices",
    desc: "Auto-generate branded invoices and send receipts on success.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Everything you need to sell services
          </h2>
          <p className="mt-3 text-slate-700">
            A modern checkout suite tailored for freelancers, agencies, and productized services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
    </section>
  );
}

export default Features;
