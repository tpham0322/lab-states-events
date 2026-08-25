import { useState } from "react";
import { TextInput } from "./components/TextInput/TextInput";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl">
        <TextInput
          onTextChange={setText}
          placeholder="Type something..."
        />

        <p className="mt-4 text-lg">
          Current text: <strong>{text}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;