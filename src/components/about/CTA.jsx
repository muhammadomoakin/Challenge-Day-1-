import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-slate-800 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
          <div
            className="absolute -top-24 left-1/2 -z-10 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#gradient)"
              fillOpacity="0.1"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#1e293b" />
              </radialGradient>
            </defs>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Ready to streamline your workflow?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Join 50,000+ teams who are already moving faster with FlowDesk.
              Start your 14-day free trial today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                variant="primary"
                className="px-8 py-3 text-lg shadow-xl shadow-blue-500/20"
              >
                Get Started Free
              </Button>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors"
              >
                Contact Sales <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
