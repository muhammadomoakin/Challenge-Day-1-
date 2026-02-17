const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
