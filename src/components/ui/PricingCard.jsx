// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

const PricingCard = ({ name, price, description, features, cta, popular }) => {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`relative flex flex-col p-8 bg-slate-800/50 backdrop-blur-sm border rounded-3xl transition-colors duration-300 ${
        popular
          ? "border-blue-500 shadow-2xl shadow-blue-500/20 z-10"
          : "border-slate-700 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
      }`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-blue-500/30">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-slate-400 text-sm mb-4">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">
            {typeof price === "number" ? `$${price}` : price}
          </span>
          {typeof price === "number" && (
            <span className="text-slate-400">/mo</span>
          )}
        </div>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <span className="text-slate-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button variant={popular ? "primary" : "secondary"} className="w-full">
        {cta}
      </Button>
    </motion.div>
  );
};

export default PricingCard;
