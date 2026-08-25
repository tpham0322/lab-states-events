import { useMemo, useState } from "react";
import { TextInput } from "./components/TextInput/TextInput";
import { StatsDisplay } from "./components/StatsDisplay/StatsDisplay";
import type { TextStats } from "./types";

function App() {
  const [text, setText] = useState("");

  const stats: TextStats = useMemo(() => {
    const trimmedText = text.trim();

    const characterCount = text.length;

    const wordCount =
      trimmedText.length === 0
        ? 0
        : trimmedText.split(/\s+/).length;

    const readingTime = wordCount / 200;

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  }, [text]);

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">
          Character Counter Test
        </h1>

        {/* TextInput */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <TextInput
            onTextChange={setText}
            placeholder="Start typing..."
          />
        </div>

        {/* StatsDisplay */}
        <div className="mt-6">
          <StatsDisplay
            stats={stats}
            showReadingTime={true}
            minWords={25}
            maxWords={100}
            targetReadingTime={1}
          />
        </div>
      </div>
    </main>
  );
}

export default App;