import { useState } from "react";
import useMeasure from "react-use-measure";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  parse,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";

export default function Calendar() {
  const [monthString, setMonthString] = useState(format(new Date(), "yyyy-MM"));
  const [direction, setDirection] = useState();
  const [isAnimating, setIsAnimating] = useState(false);
  const month = parse(monthString, "yyyy-MM", new Date());

  function nextMonth() {
    if (isAnimating) return;

    const next = addMonths(month, 1);

    setMonthString(format(next, "yyyy-MM"));
    setDirection(1);
    setIsAnimating(true);
  }

  function previousMonth() {
    if (isAnimating) return;

    const pervious = subMonths(month, 1);

    setMonthString(format(pervious, "yyyy-MM"));
    setDirection(-1);
    setIsAnimating(true);
  }

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(month)),
    end: endOfWeek(endOfMonth(month)),
  });

  return (
    <MotionConfig transition={transition}>
      <div className="flex min-h-screen items-start bg-gradient-to-br from-slate-700 to-slate-900 pt-16 text-stone-900">
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white">
          <div className="py-8">
            <div className="flex flex-col justify-center rounded text-center">
              <ResizablePanel>
                <AnimatePresence
                  mode="popLayout"
                  initial={false}
                  custom={direction}
                  onExitComplete={() => setIsAnimating(false)}
                >
                  <motion.div
                    key={monthString}
                    initial="enter"
                    animate="middle"
                    exit="exit"
                  >
                    <header className="relative flex justify-between px-8">
                      <motion.button
                        variants={removeImmediately}
                        className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                        onClick={previousMonth}
                      >
                        <ChevronLeftIcon className="h-4 w-4" />
                      </motion.button>
                      <motion.p
                        variants={variants}
                        custom={direction}
                        className="absolute inset-0 flex items-center justify-center font-semibold"
                      >
                        {format(month, "MMMM yyyy")}
                      </motion.p>
                      <motion.button
                        variants={removeImmediately}
                        onClick={nextMonth}
                        className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                      >
                        <ChevronRightIcon className="h-4 w-4" />
                      </motion.button>
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, white 10%, transparent 30%,transparent 70%, white 90%)",
                        }}
                      />
                    </header>

                    <motion.div
                      variants={removeImmediately}
                      className="mt-6 grid grid-cols-7 gap-y-6 px-8"
                    >
                      <span className="font-medium text-stone-500">Su</span>
                      <span className="font-medium text-stone-500">Mo</span>
                      <span className="font-medium text-stone-500">Tu</span>
                      <span className="font-medium text-stone-500">We</span>
                      <span className="font-medium text-stone-500">Th</span>
                      <span className="font-medium text-stone-500">Fr</span>
                      <span className="font-medium text-stone-500">Sa</span>
                    </motion.div>

                    <motion.div
                      variants={variants}
                      custom={direction}
                      className="mt-6 grid grid-cols-7 gap-y-6 px-8"
                    >
                      {days.map((day) => (
                        <span
                          className={`${isSameMonth(day, month) ? "" : "text-stone-300"} font-semibold`}
                          key={format(day, "yyyy-MM-dd")}
                        >
                          {format(day, "d")}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </ResizablePanel>
            </div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

function ResizablePanel({ children }) {
  const [ref, bounds] = useMeasure();

  return (
    <motion.div
      animate={{
        height: bounds.height > 0 ? bounds.height : null,
      }}
    >
      <div ref={ref}>{children}</div>
    </motion.div>
  );
}

const transition = { type: "spring", bounce: 0, duration: 0.4 };
const variants = {
  enter: (direction) => {
    return { x: `${100 * direction}%`, opacity: 0 };
  },
  middle: { x: "0%", opacity: 1 },
  exit: (direction) => {
    return { x: `${-100 * direction}%`, opacity: 0 };
  },
};

const removeImmediately = { exit: { visibility: "hidden" } };
