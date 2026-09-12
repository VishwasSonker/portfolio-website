import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV
    ? 'http://127.0.0.1:8000/api/chat'
    : 'https://vishwas-portfolio-ai.onrender.com/api/chat');

export const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Automatically scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  // Prevent background scrolling while chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSend = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: trimmedInput,
    };

    // Create the updated conversation
    const updatedMessages = [...messages, userMessage];

    // Immediately show user's message
    setMessages(updatedMessages);

    // Clear input and set loading
    setInput('');
    setIsLoading(true);

    const assistantId = Date.now() + 1;
    let assistantContent = '';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to get AI response: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('Streaming is not supported');
      }

      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: 'assistant',
          content: '',
        },
      ]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, {
          stream: true,
        });

        assistantContent += chunk;

        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantId
              ? {
                  ...message,
                  content: assistantContent,
                }
              : message
          )
        );
      }

    } catch (error) {
      console.error('Chat error:', error);

      const errorMessage: Message = {
        id: assistantContent ? assistantId + 1 : assistantId,
        role: 'assistant',
        content:
          "Sorry, I'm having trouble connecting to my AI backend right now. Please try again in a moment.",
      };

      setMessages((prev) => {
        const existing = prev.find((m) => m.id === assistantId);
        if (existing && !assistantContent) {
          return prev.map((m) => (m.id === assistantId ? errorMessage : m));
        }
        return [...prev, errorMessage];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      e.preventDefault();
      handleSend();
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Chat Window */}
      <div
        className="relative z-10 flex h-[85vh] w-full max-w-[520px]
                   flex-col overflow-hidden
                   rounded-2xl
                   border border-dark-600
                   bg-dark-900
                   shadow-2xl shadow-black/50"
      >

        {/* Header */}
        <div
          className="flex items-center justify-between
                     border-b border-dark-600
                     bg-dark-800/80
                     px-5 py-4"
        >
          <div className="flex items-center gap-3">

            {/* AI Icon */}
            <div
              className="flex h-9 w-9 items-center justify-center
                         rounded-lg
                         bg-accent-500/10
                         border border-accent-500/30
                         text-accent-400"
            >
              <Sparkles size={18} />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-white">
                Ask My AI
              </h2>

              <p className="text-xs text-gray-400">
                Learn more about Vishwas
              </p>
            </div>

          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center
                       rounded-lg
                       text-gray-400
                       hover:bg-dark-700
                       hover:text-white
                       transition-colors"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-5">

          {messages.length === 0 ? (
            /* Welcome / Intro State */
            <div className="flex h-full items-center justify-center text-center px-4">
              <div className="max-w-[420px]">

                <h3 className="text-2xl font-medium text-white mb-4">
                  Hi! I'm Vishwas's AI assistant.
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                  Feel free to ask me anything about my skills, projects,
                  education, experience, achievements, or technical background.
                  You can also share a job description or role requirements,
                  and I can help you compare them with my profile, highlighting
                  relevant skills, experience, and potential areas of fit.
                </p>

              </div>
            </div>
          ) : (
            /* Actual Chat */
            <div className="space-y-5">

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user'
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-accent-600 text-white rounded-br-md'
                        : 'bg-dark-800 border border-dark-600 text-gray-300 rounded-bl-md'
                    }`}
                  >
                  {message.role === 'assistant' && !message.content ? (
                    <div className="flex items-center gap-1.5 py-1 px-1">
                      <span className="h-2 w-2 rounded-full bg-accent-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="h-2 w-2 rounded-full bg-accent-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="h-2 w-2 rounded-full bg-accent-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  ) : (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                        ul: ({ children }) => (
                          <ul className="list-disc ml-5 mb-2 space-y-1">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal ml-5 mb-2 space-y-1">{children}</ol>
                        ),
                        li: ({ children }) => <li>{children}</li>,
                        strong: ({ children }) => (
                          <strong className="font-semibold text-white">{children}</strong>
                        ),
                        h1: ({ children }) => (
                          <h1 className="text-lg font-semibold text-white mb-2">{children}</h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-base font-semibold text-white mb-2">{children}</h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-sm font-semibold text-white mb-1">{children}</h3>
                        ),
                        code: ({ children }) => (
                          <code className="rounded bg-dark-700 px-1.5 py-0.5 text-xs text-accent-300">
                            {children}
                          </code>
                        ),
                        a: ({ children, href }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-400 hover:text-accent-300 underline transition-colors"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  )}
                  </div>

                </div>
              ))}

              <div ref={messagesEndRef} />

            </div>
          )}

        </div>

        {/* Input Area */}
        <div className="border-t border-dark-600 bg-dark-800/80 p-3 sm:p-4">

          <div
            className="flex items-center gap-2
                       rounded-xl
                       border border-dark-600
                       bg-dark-900
                       p-2
                       focus-within:border-accent-500/60
                       transition-colors"
          >

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask something about Vishwas..."
              className="min-w-0 flex-1
                         bg-transparent
                         px-2
                         py-2
                         text-sm text-white
                         placeholder:text-gray-500
                         outline-none"
            />

            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="flex h-9 w-9 shrink-0
                         items-center justify-center
                         rounded-lg
                         bg-accent-600
                         text-white
                         transition-all
                         hover:bg-accent-500
                         disabled:cursor-not-allowed
                         disabled:opacity-40"
              aria-label="Send message"
            >
              {isLoading ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}
            </button>

          </div>

          <p className="mt-2 text-center text-[10px] text-gray-500">
            Ask about skills, projects, education, experience and more.
          </p>

        </div>

      </div>
    </div>,
    document.body
  );
};