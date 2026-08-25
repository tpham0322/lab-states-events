import React from "react";
import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-300 bg-white p-4">
          <p className="text-sm text-gray-500">Characters</p>
          <p className="text-3xl font-bold">
            {stats.characterCount}
          </p>
        </div>

        <div className="rounded-lg border border-gray-300 bg-white p-4">
          <p className="text-sm text-gray-500">Words</p>
          <p className="text-3xl font-bold">
            {stats.wordCount}
          </p>
        </div>

        {showReadingTime && (
          <div className="rounded-lg border border-gray-300 bg-white p-4">
            <p className="text-sm text-gray-500">Reading Time</p>
            <p className="text-3xl font-bold">
              {stats.readingTime.toFixed(2)} min
            </p>
          </div>
        )}
      </div>
    </div>
  );
};