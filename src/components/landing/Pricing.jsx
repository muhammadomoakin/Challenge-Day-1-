import React from "react";
import PricingCard from "../ui/PricingCard";

const tiers = [
  {
    name: "Free",
    price: 0,
    description: "Perfect for exploring our platform.",
    features: [
      "Access to basic features",
      "Up to 3 projects",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: 12,
    description: "For growing teams and businesses.",
    features: [
      "Everything in Free",
      "Unlimited projects",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "SLA & uptime guarantee",
      "SSO & advanced security",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section
      className="py-24 bg-slate-900 relative overflow-hidden"
      id="pricing"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-400">
            Choose the plan that's right for you. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
