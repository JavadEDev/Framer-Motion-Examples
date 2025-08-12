import { motion } from "framer-motion";

export default function ArchiveIcon({ className = "size-6", ...props }) {
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
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.375 19.5h17.25m-16.5-3h15.75m-15.75-9h15.75m-15.75 3h15.75"
      />
    </svg>
  );
}
