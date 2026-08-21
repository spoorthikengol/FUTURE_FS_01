import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles, X, Send, RotateCcw } from "lucide-react";

import { answerQuestion } from "@/lib/matchTopic";
import { suggestedQuestions } from "@/data/assistantKnowledge";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessage: Message = {
  role: "assistant",
  content:
    "Hi! I'm Spoorthi AI. Ask me about Spoorthi, her projects, skills, experience or MediMind AI.",
};

export function AskSpoorthiAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  /* Auto-scroll to newest message */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  }, [messages, isTyping, shouldReduceMotion]);

  const sendMessage = (question?: string) => {
    const text = (question ?? input).trim();

    if (!text || isTyping) return;

    const answer = answerQuestion(text);

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: text,
      },
    ]);

    setInput("");
    setIsTyping(true);

    /* Small natural AI response delay */
    window.setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: answer,
        },
      ]);

      setIsTyping(false);
    }, shouldReduceMotion ? 0 : 450);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([initialMessage]);
    setInput("");
    setIsTyping(false);
  };

  return (
    <>
      {/* =========================================================
          FLOATING AI BUTTON
          ========================================================= */}
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            initial={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 0,
                    scale: 0.85,
                    y: 12,
                  }
            }
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }
            }
            exit={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 0,
                    scale: 0.85,
                  }
            }
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 1.04,
                    y: -2,
                  }
            }
            whileTap={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 0.97,
                  }
            }
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              bottom-4
              right-4
              z-50
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-black
              px-4
              py-3
              text-xs
              font-medium
              text-white
              shadow-xl
              transition-shadow
              hover:shadow-2xl
              sm:bottom-6
              sm:right-6
              sm:px-5
              sm:text-sm
            "
            aria-label="Open Ask Spoorthi AI"
          >
            <Sparkles
              size={16}
              className="shrink-0 sm:h-[18px] sm:w-[18px]"
            />

            <span className="whitespace-nowrap">
              Ask Spoorthi AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* =========================================================
          AI CHAT PANEL
          ========================================================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 20,
                    scale: 0.96,
                  }
            }
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
            }
            exit={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 20,
                    scale: 0.96,
                  }
            }
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              bottom-4
              left-4
              right-4
              z-50
              flex
              max-h-[calc(100vh-32px)]
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-bg
              shadow-2xl
              dark:border-border-dark
              dark:bg-bg-dark

              sm:bottom-6
              sm:left-auto
              sm:right-6
              sm:w-[360px]
            "
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3 dark:border-border-dark">
              <div className="flex min-w-0 items-center gap-2">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          rotate: [0, 8, -8, 0],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white"
                >
                  <Sparkles size={18} />
                </motion.div>

                <div className="min-w-0">
                  <h2 className="truncate text-sm font-semibold text-ink dark:text-ink-dark">
                    Ask Spoorthi AI
                  </h2>

                  <p className="text-xs text-muted dark:text-muted-dark">
                    Portfolio assistant
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={clearChat}
                  className="
                    rounded-md
                    p-2
                    text-muted
                    transition-colors
                    hover:bg-surface
                    hover:text-ink
                    dark:text-muted-dark
                    dark:hover:bg-surface-dark
                    dark:hover:text-ink-dark
                  "
                  aria-label="Clear chat"
                >
                  <RotateCcw size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="
                    rounded-md
                    p-2
                    text-muted
                    transition-colors
                    hover:bg-surface
                    hover:text-ink
                    dark:text-muted-dark
                    dark:hover:bg-surface-dark
                    dark:hover:text-ink-dark
                  "
                  aria-label="Close assistant"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className="
                flex
                min-h-[220px]
                max-h-[min(420px,50vh)]
                flex-col
                gap-3
                overflow-y-auto
                p-4
                sm:min-h-[260px]
              "
            >
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}`}
                  initial={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: 0,
                          y: 8,
                          scale: 0.97,
                        }
                  }
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }
                  }
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                    message.role === "user"
                      ? "ml-auto bg-black text-white"
                      : "mr-auto bg-surface text-ink dark:bg-surface-dark dark:text-ink-dark"
                  )}
                >
                  {message.content}
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="mr-auto flex items-center gap-1 rounded-2xl bg-surface px-4 py-3 dark:bg-surface-dark"
                    aria-label="Spoorthi AI is typing"
                  >
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.7,
                        repeat: Infinity,
                        delay: 0,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-muted dark:bg-muted-dark"
                    />

                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.7,
                        repeat: Infinity,
                        delay: 0.12,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-muted dark:bg-muted-dark"
                    />

                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.7,
                        repeat: Infinity,
                        delay: 0.24,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-muted dark:bg-muted-dark"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions */}
            {messages.length === 1 && !isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex max-h-32 shrink-0 flex-wrap gap-2 overflow-y-auto border-t border-border px-4 py-3 dark:border-border-dark"
              >
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    className="
                      rounded-full
                      border
                      border-border
                      px-3
                      py-1.5
                      text-xs
                      text-muted
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:border-accent
                      hover:text-accent-ink
                      dark:border-border-dark
                      dark:text-muted-dark
                    "
                  >
                    {question}
                  </button>
                ))}
              </motion.div>
            )}

            {/* Input */}
            <div className="shrink-0 border-t border-border p-3 dark:border-border-dark">
              <div className="flex items-center gap-2 rounded-xl border border-border px-3 py-2 dark:border-border-dark">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Spoorthi..."
                  disabled={isTyping}
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-sm
                    text-ink
                    outline-none
                    placeholder:text-muted
                    disabled:opacity-50
                    dark:text-ink-dark
                    dark:placeholder:text-muted-dark
                  "
                  aria-label="Ask Spoorthi AI"
                />

                <button
                  type="button"
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isTyping}
                  className="
                    shrink-0
                    rounded-lg
                    bg-black
                    p-2
                    text-white
                    transition-all
                    hover:scale-105
                    hover:opacity-80
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}