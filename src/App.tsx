import { StatsDisplay } from "./components/StatsDisplay/StatsDisplay";

function App() {
  const testStats = {
    characterCount: 125,
    wordCount: 25,
    readingTime: 0.125,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold">
          StatsDisplay Test
        </h1>

        <StatsDisplay stats={testStats} />
      </div>
    </div>
  );
}

export default App;