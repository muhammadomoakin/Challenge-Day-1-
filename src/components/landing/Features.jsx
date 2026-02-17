import React from "react";
import FeatureCard from "../ui/FeatureCard";
import {
  BoltIcon,
  UsersIcon,
  ChartBarIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Smart automation",
    description:
      "Automate repetitive tasks with our intelligent workflow engine that adapts to your needs.",
    icon: BoltIcon,
  },
  {
    name: "Real-time collaboration",
    description:
      "Work together with your team in real-time. Changes are synced instantly across all devices.",
    icon: UsersIcon,
  },
  {
    name: "Analytics dashboard",
    description:
      "Gain valuable insights with our comprehensive analytics tools and customizable reports.",
    icon: ChartBarIcon,
  },
  {
    name: "Secure cloud storage",
    description:
      "Keep your data safe with enterprise-grade encryption and automated daily backups.",
    icon: LockClosedIcon,
  },
];

const Features = () => {
  return (
    <div id="features" className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to move faster
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Accelerate your development workflow with our powerful suite of
            tools designed for modern teams.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard
                key={feature.name}
                title={feature.name}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
