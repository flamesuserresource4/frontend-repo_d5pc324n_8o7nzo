import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
            <div className="backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/50 rounded-2xl p-6 sm:p-8 border border-white/60 shadow-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Accept cards globally
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Sell services with a modern, glassmorphic checkout
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-700">
                Build a sleek storefront for your consulting, coaching, or creative services. Secure payments, instant invoices, and a beautiful 3D hero experience.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">
                  Get started free
                  <ArrowRight size={16} />
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-white">
                  View demo
                </button>
              </div>

              <div className="mt-6 flex items-center gap-4 text-xs text-slate-600">
                <span>PCI-DSS compliant</span>
                <span>•</span>
                <span>1.2% + $0.20 per transaction</span>
                <span>•</span>
                <span>No monthly fees</span>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

export default Hero;
