import { useState, useContext, createContext } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import useMeasure from "react-use-measure";
import { CheckIcon } from "../icons";
import Spinner from "./ui/Spinner.jsx";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const transition = { type: "tween", ease: "easeInOut", duration: 0.5 };

export default function ResizablePanel() {
  const [status, setStatus] = useState("idle");
  const [ref, bounds] = useMeasure();

  return (
    <MotionConfig transition={transition}>
      <div className="flex min-h-screen flex-col items-start bg-zinc-900 p-20 ps-28">
        <div className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800">
            <div className="px-8 pt-8">
              <p className="text-lg text-white">Reset password</p>
            </div>
            <motion.div
              animate={{
                height: bounds.height > 0 ? bounds.height : null,
              }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            >
              <div ref={ref}>
                <AnimatePresence mode="popLayout">
                  {status === "idle" || status === "saving" ? (
                    <motion.div
                      exit={{ opacity: 0 }}
                      transition={{
                        ...transition,
                        duration: transition.duration / 2,
                      }}
                      key="form"
                    >
                      <Form
                        onSubmit={async () => await delay(1000)}
                        afterSave={() => setStatus("success")}
                        className="p-8"
                      >
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                        >
                          <p className="text-sm text-zinc-400">
                            Enter your email to get a password reset link
                          </p>
                        </motion.div>
                        <div className="mt-3">
                          <input
                            className="block w-full rounded border-none bg-white p-2 text-slate-900"
                            type="email"
                            required
                            defaultValue="example@gmail.com"
                          />
                        </div>
                        <div className="mt-8 text-right">
                          <Form.Button className="rounded bg-indigo-500 px-5 py-2 text-sm">
                            Email me my link
                          </Form.Button>
                        </div>
                      </Form>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ...transition,
                        duration: transition.duration / 2,
                        delay: transition.duration / 2,
                      }}
                    >
                      <p className="p-8 text-sm text-zinc-400">
                        Email sent! Check your inbox to continue.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            <span className="underline">Reach out</span> to use in you need more
            help.
          </p>
        </div>
      </div>
    </MotionConfig>
  );
}

const formContext = createContext();

function Form({ onSubmit, afterSave, children, ...props }) {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("saving");
    await onSubmit();
    setStatus("success");
    await delay(1250);
    afterSave();
  }

  return (
    <formContext.Provider value={{ status }}>
      <form onSubmit={handleSubmit} {...props}>
        <fieldset disabled={status !== "idle"}>{children}</fieldset>
      </form>
    </formContext.Provider>
  );
}

Form.Button = function FormButton({ children, className, ...rest }) {
  const { status } = useContext(formContext);
  const disabled = status !== "idle";
  const showOverlay = status === "saving" || status === "success";

  return (
    <MotionConfig transition={{ ...transition, duration: 0.15 }}>
      <button
        type="submit"
        disabled={disabled}
        aria-busy={status === "saving"}
        className={`${className} relative inline-flex items-center justify-center transition duration-200 ${
          disabled ? "bg-opacity-80" : "hover:bg-opacity-80"
        }`}
        {...rest}
      >
        <span className={showOverlay ? "opacity-0" : ""}>{children}</span>

        <AnimatePresence mode="wait" initial={false}>
          {status === "saving" && (
            <motion.div
              key="saving"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <Spinner />
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <CheckIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </MotionConfig>
  );
};
