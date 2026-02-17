import { UserIcon } from "@heroicons/react/24/outline";

const TeamCard = ({ name, role, avatar }) => {
  return (
    <div className="group flex flex-col items-center p-8 bg-slate-800/30 border border-slate-700/30 rounded-2xl hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-slate-700 bg-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <UserIcon className="w-12 h-12 text-slate-500 group-hover:text-blue-400 transition-colors" />
        )}
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
      <p className="text-sm text-blue-400 font-medium tracking-wide uppercase">
        {role}
      </p>
    </div>
  );
};

export default TeamCard;
