import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
];

const collaspedAspectRatio = 1 / 3;
const fullAspectRatio = 3 / 2;
const margin = 6;
const gap = 2;

export default function CarouselSlider() {
  const [index, setIndex] = useState(0);

  const thumbsContainerRef = useRef(null);
  const thumbButtonsRef = useRef([]);
  const [thumbsX, setThumbsX] = useState(0);

  // NEW: Keyboard navigation function
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          setIndex((prevIndex) => Math.max(0, prevIndex - 1));
          break;
        case "ArrowRight":
          event.preventDefault();
          setIndex((prevIndex) => Math.min(images.length - 1, prevIndex + 1));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const centerActiveThumb = () => {
      const container = thumbsContainerRef.current;
      const activeEl = thumbButtonsRef.current[index];
      if (!container || !activeEl) return;

      const c = container.getBoundingClientRect();
      const a = activeEl.getBoundingClientRect();
      const delta = a.left + a.width / 2 - (c.left + c.width / 2);

      setThumbsX((prev) => prev - delta);
    };

    const raf = requestAnimationFrame(centerActiveThumb);
    const t = setTimeout(centerActiveThumb, 700);
    const onResize = () => centerActiveThumb();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, [index]);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map((image, imageIndex) => (
                <motion.img
                  key={image}
                  src={image}
                  animate={{ opacity: imageIndex === index ? 1 : 0.3 }}
                  className="aspect-[3/2] object-cover"
                />
              ))}
            </motion.div>

            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  onClick={() => setIndex(index - 1)}
                  className="absolute top-1/2 left-2 -mt-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  onClick={() => setIndex(index + 1)}
                  className="absolute top-1/2 right-2 -mt-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div
            ref={thumbsContainerRef}
            className="inset-x-0 mt-4 mb-4 flex h-14 justify-center overflow-hidden"
          >
            <motion.div
              initial={false}
              animate={{ x: thumbsX }}
              style={{ aspectRatio: fullAspectRatio, gap: `${gap}%` }}
              className="flex"
            >
              {images.map((image, imageIndex) => (
                <motion.button
                  key={image}
                  ref={(el) => (thumbButtonsRef.current[imageIndex] = el)}
                  onClick={() => setIndex(imageIndex)}
                  initial={false}
                  whileHover={{ opacity: 1 }}
                  animate={imageIndex === index ? "active" : "inactive"}
                  variants={{
                    active: {
                      aspectRatio: fullAspectRatio,
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                      opacity: 1,
                    },
                    inactive: {
                      aspectRatio: collaspedAspectRatio,
                      marginLeft: 0,
                      marginRight: 0,
                      opacity: 0.5,
                    },
                  }}
                  className="shrink-0"
                >
                  <img
                    src={image}
                    className="h-full cursor-pointer object-cover"
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="black"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
      />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="black"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
