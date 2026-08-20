import { useState, type KeyboardEvent } from "react";
import { Sparkles, X, Send, RotateCcw } from "lucide-react";

import { answerQuestion } from "@/lib/matchTopic";
import { suggestedQuestions } from "@/data/assistantKnowledge";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AskSpoorthiAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Spoorthi AI. Ask me about Spoorthi, her projects, skills, experience or MediMind AI.",
    },
  ]);

  const sendMessage = (question?: string) => {
    const text = (question ?? input).trim();

    if (!text) return;

    const answer = answerQuestion(text);

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: text,
      },
      {
        role: "assistant",
        content: answer,
      },
    ]);

    setInput("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi! I'm Spoorthi AI. Ask me about Spoorthi, her projects, skills, experience or MediMind AI.",
      },
    ]);
  };

  return (
    <>
      {/* Floating AI button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105"
          aria-label="Open Ask Spoorthi AI"
        >
          <Sparkles size={18} />
          Ask Spoorthi AI
        </button>
      )}

      {/* AI panel */}
      {open && (
        <div
          className={cn(
            "fixed bottom-6 right-6 z-50 flex w-[360px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <Sparkles size={18} />
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  Ask Spoorthi AI
                </h2>

                <p className="text-xs text-muted-foreground">
                  Portfolio assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={clearChat}
                className="rounded-md p-2 hover:bg-muted"
                aria-label="Clear chat"
              >
                <RotateCcw size={16} />
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-2 hover:bg-muted"
                aria-label="Close assistant"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex max-h-[420px] min-h-[260px] flex-col gap-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={cn(
                  "max-w-[85%] rounded-2xl px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-black text-white"
                    : "mr-auto bg-muted text-foreground"
                )}
              >
                {message.content}
              </div>
            ))}
          </div>

          {/* Suggested questions */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 border-t px-4 py-3">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="rounded-full border px-3 py-1.5 text-xs transition hover:bg-muted"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t p-3">
            <div className="flex items-center gap-2 rounded-xl border px-3 py-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Spoorthi..."
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              />

              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className="rounded-lg bg-black p-2 text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}