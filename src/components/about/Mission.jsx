import React from "react";

const Mission = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 font-display">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg leading-8 text-slate-400">
              <p>
                At FlowDesk, we believe that complexity is the enemy of
                productivity. Our mission is to strip away the noise and provide
                teams with a workspace that feels like an extension of their own
                thoughts.
              </p>
              <p>
                We're committed to building tools that prioritize simplicity,
                speed, and real-time collaboration, allowing you to focus on
                what truly matters: your core work.
              </p>
              <div className="pt-4 flex gap-x-8">
                <div>
                  <div className="text-2xl font-bold text-white">10x</div>
                  <div className="text-sm text-slate-500">Faster Workflows</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50k+</div>
                  <div className="text-sm text-slate-500">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-slate-500">Uptime</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-video rounded-2xl bg-slate-800 border border-slate-700 p-2 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Productivity Dashboard"
                className="w-full h-full object-cover rounded-xl opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
