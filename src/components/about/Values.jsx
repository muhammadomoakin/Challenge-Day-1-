import {
  BoltIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import ValueCard from "../ui/ValueCard";

const values = [
  {
    name: "Simplicity",
    description:
      "We believe that the best tools are the ones that get out of your way. Every feature we build is designed with focus and clarity.",
    icon: SparklesIcon,
  },
  {
    name: "Speed",
    description:
      "Time is your most valuable asset. FlowDesk is built for high-performance teams who can't afford to wait for slow software.",
    icon: BoltIcon,
  },
  {
    name: "Reliability",
    description:
      "Your work is too important to be lost. We maintain 99.9% uptime and enterprise-grade security for every single user.",
    icon: ShieldCheckIcon,
  },
];

const Values = () => {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Our Values
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            The principles that guide every decision we make at FlowDesk.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <ValueCard
              key={value.name}
              title={value.name}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
