// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// eslint-disable-next-line no-unused-vars
const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group p-8 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl hover:border-blue-500/40 transition-colors duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300">
        <Icon className="h-7 w-7 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
        {description}
      </p>
    </motion.div>
  );
};

export default ValueCard;
