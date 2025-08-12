import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EmailIcon, ArchiveIcon } from "../icons";

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
