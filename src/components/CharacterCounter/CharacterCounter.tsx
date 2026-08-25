import React, {
  useCallback,
  useMemo,
  useState,
} from "react";

import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

import type {
  CharacterCounterProps,
  TextStats,
} from "../../types";

export const CharacterCounter: React.FC<
  CharacterCounterProps
> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 1,
}) => {
  const [text, setText] = useState<string>("");

  const handleTextChange = useCallback(
    (newText: string) => {
      setText(newText);
    },
    [],
  );

  const stats: TextStats = useMemo(() => {
    const trimmedText = text.trim();

    const characterCount = text.length;

    const wordCount =
      trimmedText.length === 0
        ? 0
        : trimmedText.split(/\s+/).length;

    /*
     * Estimated reading speed:
     * 200 words per minute.
     */
    const readingTime =
      wordCount === 0 ? 0 : wordCount / 200;

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  }, [text]);

  const isMinimumMet = stats.wordCount >= minWords;
  const isMaximumExceeded = stats.wordCount > maxWords;

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Character Counter
          </h1>

          <p className="mt-2 text-gray-600">
            Enter text below to see character count,
            word count, and estimated reading time.
          </p>
        </header>

        {/* Main Card */}
        <div className="rounded-2xl bg-white p-5 shadow-lg sm:p-8">
          <TextInput
            onTextChange={handleTextChange}
            placeholder="Start typing your text here..."
          />

          <div className="mt-6">
            <StatsDisplay
              stats={stats}
              showReadingTime={true}
              minWords={minWords}
              maxWords={maxWords}
              targetReadingTime={targetReadingTime}
            />
          </div>

          {/* Feedback */}
          <div
            className={`mt-6 rounded-lg p-4 text-sm ${
              isMaximumExceeded
                ? "bg-red-50 text-red-700"
                : isMinimumMet
                  ? "bg-green-50 text-green-700"
                  : "bg-yellow-50 text-yellow-700"
            }`}
            role="status"
            aria-live="polite"
          >
            {isMaximumExceeded
              ? `You have exceeded the ${maxWords}-word maximum.`
              : isMinimumMet
                ? "Your text has reached the minimum word goal."
                : `You need ${
                    minWords - stats.wordCount
                  } more ${
                    minWords - stats.wordCount === 1
                      ? "word"
                      : "words"
                  } to reach the minimum.`}
          </div>
        </div>
      </div>
    </main>
  );
};