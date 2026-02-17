import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-20 pb-32 lg:pt-32 lg:pb-40">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] h-[40rem] rounded-full bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[60rem] h-[30rem] rounded-full bg-gradient-to-tl from-purple-600/20 to-blue-600/20 blur-3xl opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-blue-300 to-indigo-300 pb-2 leading-tight">
              Manage your workflow without chaos.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light">
              FlowDesk helps teams organize, automate and scale their work in
              one beautiful dashboard.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Button
                variant="primary"
                className="shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow px-8"
              >
                Start Free
              </Button>
              <Button
                variant="outline"
                className="backdrop-blur-sm hover:bg-white/5 px-8"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative mt-16 lg:mt-0 z-10">
            {/* Mockup Container */}
            <div className="relative rounded-xl bg-slate-800/40 p-2 ring-1 ring-white/10 lg:rounded-2xl lg:p-3 shadow-2xl backdrop-blur-md transform transition-transform duration-500 hover:scale-[1.01] group">
              {/* Simulated Window Controls */}
              <div className="absolute top-3 left-4 flex space-x-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-colors"></div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="App dashboard mockup"
                className="w-full h-auto rounded-lg shadow-inner border border-white/5 aspect-[16/10] object-cover object-top bg-slate-900"
              />

              {/* Decorative floating elements */}
              <div className="absolute -top-12 -right-12 -z-10 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-12 -left-12 -z-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow delay-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
