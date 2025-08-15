import { useRef } from "react";
import { NavLink } from "react-router";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";

const FeatureCard = ({ to, title, description }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 15,
    mass: 0.5,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 15,
    mass: 0.5,
  });

  const xPct = useTransform(x, (v) => `${(v + 0.5) * 100}%`);
  const yPct = useTransform(y, (v) => `${(v + 0.5) * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${xPct} ${yPct}, rgba(59,130,246,0.20), transparent 60%)`;

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-lg bg-white p-6 shadow-md hover:shadow-blue-200"
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-lg"
        style={{ background: spotlight, opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        <NavLink to={to} className="hover:text-blue-700">
          {title}
        </NavLink>
      </h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
