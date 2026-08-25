import React from "react";
import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 1,
}) => {
  const {
    characterCount,
    wordCount,
    readingTime,
  } = stats;

  const wordProgress =
    maxWords > 0 ? Math.min((wordCount / maxWords) * 100, 100) : 0;

  const readingProgress =
    targetReadingTime > 0
      ? Math.min((readingTime / targetReadingTime) * 100, 100)
      : 0;

  const isBelowMinimum = wordCount < minWords;
  const isAboveMaximum = wordCount > maxWords;

  const formatReadingTime = (minutes: number): string => {
    const totalSeconds = Math.round(minutes * 60);

    const minutesPart = Math.floor(totalSeconds / 60);
    const secondsPart = totalSeconds % 60;

    return `${minutesPart}:${secondsPart
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <section
      className="w-full"
      aria-label="Text statistics"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Characters */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Characters
          </p>

          <p
            className="mt-2 text-3xl font-bold text-gray-900 transition-all"
            aria-live="polite"
          >
            {characterCount.toLocaleString()}
          </p>
        </div>

        {/* Words */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">
              Words
            </p>

            <span className="text-xs text-gray-500">
              {minWords} - {maxWords}
            </span>
          </div>

          <p
            className={`mt-2 text-3xl font-bold transition-all ${
              isBelowMinimum
                ? "text-yellow-600"
                : isAboveMaximum
                  ? "text-red-600"
                  : "text-green-600"
            }`}
            aria-live="polite"
          >
            {wordCount.toLocaleString()}
          </p>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                isAboveMaximum
                  ? "bg-red-500"
                  : isBelowMinimum
                    ? "bg-yellow-500"
                    : "bg-green-500"
              }`}
              style={{ width: `${wordProgress}%` }}
              role="progressbar"
              aria-valuenow={wordCount}
              aria-valuemin={0}
              aria-valuemax={maxWords}
              aria-label="Word count progress"
            />
          </div>

          <p className="mt-2 text-xs text-gray-500">
            {isBelowMinimum
              ? `${minWords - wordCount} more words needed`
              : isAboveMaximum
                ? `${wordCount - maxWords} words over the limit`
                : "Within target range"}
          </p>
        </div>

        {/* Reading Time */}
        {showReadingTime && (
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Reading Time
            </p>

            <p
              className="mt-2 text-3xl font-bold text-gray-900"
              aria-live="polite"
            >
              {formatReadingTime(readingTime)}
            </p>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-300"
                style={{ width: `${readingProgress}%` }}
                role="progressbar"
                aria-valuenow={readingTime}
                aria-valuemin={0}
                aria-valuemax={targetReadingTime}
                aria-label="Reading time progress"
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Target: {targetReadingTime}{" "}
              {targetReadingTime === 1
                ? "minute"
                : "minutes"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};