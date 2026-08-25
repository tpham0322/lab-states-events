import React from "react";
import type { TextInputProps } from "../../types";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    onTextChange(event.target.value);
  };

  return (
    <div className="w-full">
      <label
        htmlFor="text-input"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Enter your text
      </label>

      <textarea
        id="text-input"
        className="min-h-48 w-full resize-y rounded-xl border border-gray-300 bg-white p-4 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={handleChange}
        rows={6}
        aria-label="Text input"
      />
    </div>
  );
};