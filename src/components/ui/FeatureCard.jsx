import React from "react";
// eslint-disable-next-line no-unused-vars
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative flex flex-col items-start p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
        <Icon
          className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-lg font-semibold leading-7 text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-base leading-7 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
