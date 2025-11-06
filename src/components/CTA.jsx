import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-10 text-white">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="relative z-10 grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Launch your service storefront today</h3>
              <p className="mt-2 text-white/90">Create products, accept payments worldwide, and automate invoicing in minutes.</p>
            </div>
            <div className="flex md:justify-end">
              <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-white/90">
                Get started free
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
