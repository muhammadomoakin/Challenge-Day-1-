// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25 focus:ring-blue-500",
    secondary:
      "bg-slate-800 text-slate-200 border border-slate-700 focus:ring-slate-500",
    outline:
      "bg-transparent border border-slate-600 text-slate-300 focus:ring-slate-500",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
