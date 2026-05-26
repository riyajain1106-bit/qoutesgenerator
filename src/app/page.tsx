"use client";

import React, { useCallback, useEffect, useState } from "react";
import { RotateCw } from "lucide-react";

type QuoteData = {
  content: string;
  author: string;
};

export default function QuotePage() {
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [key, setKey] = useState(0);

  const loadQuote = useCallback(async () => {
    setLoading(true);
    setHasError(false);

    const timer = new Promise<never>((_, rej) =>
      setTimeout(() => rej(new Error("timeout")), 4000)
    );

    try {
      const result = await Promise.race([fetch("/api/quote"), timer]);
      const res = result as Response;
      if (!res.ok) throw new Error("bad response");
      const json: QuoteData = await res.json();
      setQuoteData(json);
      setKey((k) => k + 1);
    } catch {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuote();
  }, [loadQuote]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative">
      {/* top label */}
      <span
        className="absolute top-6 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-neutral-500"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Riya1106
      </span>

      {/* card */}
      <div className="max-w-3xl w-full flex flex-col items-center gap-8 text-center">
        {loading && !quoteData && (
          <p
            className="text-neutral-400 text-lg"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Fetching wisdom...
          </p>
        )}

        {hasError && (
          <div className="flex flex-col items-center gap-4">
            <p
              className="text-neutral-400 text-lg"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Couldn&apos;t load a quote right now.
            </p>
            <button
              onClick={loadQuote}
              className="flex items-center gap-2 text-sm text-neutral-300 border border-neutral-700 rounded-full px-5 py-2 hover:border-neutral-400 transition"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <RotateCw size={14} /> Try again
            </button>
          </div>
        )}

        {quoteData && (
          <div key={key} className="fade-in flex flex-col items-center gap-6">
            {/* quote mark */}
            <span
              className="text-7xl leading-none text-neutral-700 select-none"
              aria-hidden
            >
              &ldquo;
            </span>

            {/* quote text */}
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-neutral-100"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {quoteData.content}
            </h1>

            {/* author + refresh */}
            <button
              onClick={loadQuote}
              disabled={loading}
              className="group flex items-center gap-3 text-neutral-500 hover:text-neutral-300 transition mt-2"
              style={{ fontFamily: "var(--font-inter)" }}
              aria-label="Load new quote"
            >
              <span className="text-sm tracking-wide">— {quoteData.author}</span>
              <RotateCw
                size={14}
                className={`transition-transform group-hover:rotate-180 ${
                  loading ? "animate-spin" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>

      {/* bottom hint */}
      <p
        className="absolute bottom-6 text-xs text-neutral-700"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        click the author to get a new quote
      </p>
    </main>
  );
}
