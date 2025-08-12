import { motion } from "framer-motion";

export default function Spinner({ size = 20, className = "" }) {
  return (
    <motion.div
      role="status"
      aria-label="Loading"
      className={`inline-block rounded-full border-2 border-white/30 border-t-white ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
    />
  );
}
