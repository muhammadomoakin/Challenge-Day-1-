const AboutHero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-slate-900 to-slate-900 opacity-50"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 font-display">
          Built for teams who move fast
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
          FlowDesk started in 2024 with a simple idea: that work should be
          fluid, not forced. We're building the infrastructure for the next
          generation of high-performance teams.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
