import { motion } from "framer-motion";

export default function EmailIcon({ className = "size-6", ...props }) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor" 
      className={className} 
      aria-hidden="true" 
      role="img"
    >
      <motion.path
        initial={{ stroke: "currentColor", scale: 1, pathLength: 0 }}
        animate={{ stroke: "currentColor", scale: 1.1, pathLength: 1 }}
        whileHover={{ stroke: "var(--color-blue-500)", scale: 1.1 }}
        transition={{ 
          stroke: { duration: 0.1, ease: "easeOut" }, 
          scale: { duration: 0.3, ease: "easeInOut" } 
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}
