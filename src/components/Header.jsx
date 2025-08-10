import {
  motion,
  useMotionValue,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useMotionTemplate,
} from "motion/react";

import { useState } from "react";

let pin = (number, min, max) => Math.min(Math.max(number, min), max);

function useBoundedScroll(bounds, setIsCenter) {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1],
  );
  useMotionValueEvent(scrollY, "change", (current) => {
    const pervious = scrollY.getPrevious();
    const diff = current - pervious;
    const newScrollYBounded = scrollYBounded.get() + diff;
    setIsCenter(newScrollYBounded / bounds >= 1);
    scrollYBounded.set(pin(newScrollYBounded, 0, bounds));
  });

  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Header() {
  const [isCenter, setIsCenter] = useState(false);
  const { scrollYBoundedProgress } = useBoundedScroll(400, setIsCenter);
  const scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.5, 1],
    [0, 0, 1],
  );

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-1 overflow-hidden bg-white text-slate-500">
      <div className="z-0 flex-1">
        <motion.header
          style={{
            height: useTransform(
              scrollYBoundedProgressThrottled,
              [0, 1],
              [80, 50],
            ),
            backgroundColor: useMotionTemplate`color-mix(in oklab, var(--color-white) ${useTransform(scrollYBoundedProgressThrottled, [0, 1], [100, 60])}%, transparent)`,
          }}
          className="fixed inset-x-0 flex h-20 shadow backdrop-blur-md"
        >
          <motion.div
            layout
            className={`mx-auto flex w-full max-w-5xl items-center transition-all duration-100 ${
              isCenter ? "justify-center" : "justify-between"
            }`}
          >
            <motion.p
              layout
              style={{
                scale: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [1, 1.5],
                ),
              }}
              className="flex origin-left items-center text-xl font-semibold uppercase"
            >
              <span className="-ml-1.5 inline-block -rotate-90 text-[10px] leading-1">
                The
              </span>
              <span className="-ml-1 text-2xl tracking-[-.075em] text-slate-600">
                Daily Bugle
              </span>
            </motion.p>
            <motion.nav
              layout
              style={{
                opacity: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [1, 0],
                ),
              }}
              className="flex space-x-4 text-xs font-medium text-slate-400"
            >
              <a href="#">News</a>
              <a href="#">Sports</a>
              <a href="#">Culture</a>
            </motion.nav>
          </motion.div>
        </motion.header>

        <main className="px-8 pt-28">
          <h1 className="h-10 w-4/5 rounded bg-slate-200 text-2xl font-bold" />
          <div className="mt-8 space-y-6">
            {[...Array(2).keys()].map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-200" />
                <p className="h-2 rounded bg-slate-200" />
                <p className="h-4 w-4/6 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
