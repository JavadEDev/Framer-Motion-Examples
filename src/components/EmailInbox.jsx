import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

let titles = [
  ["Welcome to Your Inbox", "welcome"],
  ["Password Reset Request", "password-reset"],
  ["Your Order Has Shipped", "order-shipped"],
  ["Meeting Reminder", "meeting-reminder"],
  ["Invoice Available", "invoice"],
  ["Subscription Renewal Notice", "subscription-renewal"],
  ["Security Alert", "security-alert"],
  ["Weekly Newsletter", "newsletter"],
  ["Event Invitation", "event-invitation"],
];

export default function EmailInbox() {
  const [messages, setMessages] = useState([...Array(9).keys()]);
  const [selectedMessages, setSelectedMessages] = useState([]);

  function addMessage() {
    const newMsg = (messages.at(-1) || 0) + 1;
    setMessages((messages) => [...messages, newMsg]);
  }

  function toggleMessage(id) {
    if (selectedMessages.includes(id)) {
      setSelectedMessages((messages) => messages.filter((msg) => msg !== id));
    } else {
      setSelectedMessages((messages) => [...messages, id]);
    }
  }

  function removeSelectedMessages(id) {
    setMessages(
      (messages) => messages.filter((msg) => !selectedMessages.includes(msg)),
      setSelectedMessages([]),
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center overscroll-y-contain bg-gradient-to-br from-slate-700 to-slate-900 px-6 py-8 text-slate-600">
      <div className="max-auto flex w-full max-w-3xl flex-1 overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="flex w-[45%] flex-col bg-slate-50 py-2">
          <div className="border-b px-5">
            <div className="flex justify-between py-2 text-right">
              <button
                onClick={addMessage}
                className="-mx-2 rounded px-2 py-1 text-slate-400 hover:text-slate-600 active:text-slate-200"
              >
                <EmailIcon className="h-5 w-5" />
              </button>
              <button
                onClick={removeSelectedMessages}
                className="-mx-2 rounded px-2 py-1 text-slate-400 hover:text-slate-600 active:text-slate-200"
              >
                <ArchiveIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <ul className="overflow-y-hidden px-3 pt-2">
            <AnimatePresence initial={false}>
              {[...messages].reverse().map((msg) => (
                <motion.li
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{
                    opacity: { duration: 0.2 },
                  }}
                  exit={{ opacity: 0, height: 0 }}
                  key={msg}
                  className="relative"
                >
                  <div className="py-0.5">
                    <button
                      onClick={() => toggleMessage(msg)}
                      className={`${
                        selectedMessages.includes(msg)
                          ? "bg-blue-500 hover:bg-blue-800"
                          : "hover:bg-slate-200"
                      } block w-full cursor-pointer truncate rounded px-3 py-3 text-left`}
                    >
                      <p
                        className={`${
                          selectedMessages.includes(msg)
                            ? "text-white"
                            : "text-slate-500"
                        } truncate text-sm font-medium`}
                      >
                        {titles[msg % titles.length][0]}
                      </p>
                      <p
                        className={`${
                          selectedMessages.includes(msg)
                            ? "text-blue-200"
                            : "text-slate-400"
                        } truncate text-xs`}
                      >
                        {titles[msg % titles.length][1]}
                      </p>
                    </button>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
        <div className="flex-1 overflow-y-hidden border-l px-8 py-8">
          <h1 className="h-8 rounded bg-slate-100 text-2xl font-bold" />
          <div className="mt-8 space-y-6">
            {[...Array(9).keys()].map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-100" />
                <p className="h-4 rounded bg-slate-100" />
                <p className="h-4 w-4/6 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <motion.path
        initial={{ stroke: "currentColor", scale: 1, pathLength: 0 }}
        animate={{ stroke: "currentColor", scale: 1.1, pathLength: 1 }}
        whileHover={{
          stroke: "var(--color-blue-500)",
          scale: 1.1,
        }}
        transition={{
          stroke: {
            duration: 0.1,
            ease: "easeOut",
          },
          scale: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function ArchiveIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
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
        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
      />
    </svg>
  );
}
