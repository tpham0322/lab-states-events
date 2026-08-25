# Character Counter

A responsive React and TypeScript character counter application built with Vite and Tailwind CSS.

The application allows users to enter text and see their character count, word count, and estimated reading time in real time.

## Features

- Real-time character counting
- Real-time word counting
- Estimated reading time
- Minimum and maximum word goals
- Word count progress indicator
- Reading time progress indicator
- Visual feedback based on word count
- Responsive design
- TypeScript prop interfaces
- Reusable React components
- Accessible UI elements

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Hooks

## Project Structure

```text
src/
├── components/
│   ├── TextInput/
│   │   └── TextInput.tsx
│   ├── StatsDisplay/
│   │   └── StatsDisplay.tsx
│   └── CharacterCounter/
│       └── CharacterCounter.tsx
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Components

### TextInput

The `TextInput` component handles user text input and communicates changes to its parent component using the `onTextChange` callback.

It supports:

- Custom placeholder text
- Optional initial values
- Typed callback functions

### StatsDisplay

The `StatsDisplay` component displays statistics calculated from the user's text.

It displays:

- Character count
- Word count
- Estimated reading time
- Word count progress
- Reading time progress
- Feedback based on minimum and maximum word limits

### CharacterCounter

The `CharacterCounter` component combines the `TextInput` and `StatsDisplay` components.

It manages the current text using React state and calculates statistics whenever the text changes.

## Reading Time Calculation

Reading time is estimated using an average reading speed of 200 words per minute.

```text
Reading Time = Word Count / 200
```

For example:

- 100 words = 0.5 minutes
- 200 words = 1 minute
- 400 words = 2 minutes

The application converts the calculated time into a `minutes:seconds` format for display.

## State Management

The application uses React's `useState` hook to keep track of the current text.

The `useCallback` hook is used for the text change handler, while `useMemo` is used to calculate statistics when the text changes.

The data flows between components using typed props and callback functions.

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd character-counter
```

Install the dependencies:

```bash
npm install
```

## Running the Application

Start the Vite development server:

```bash
npm run dev
```

Open the local development URL provided by Vite in your browser.

## Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Usage

The `CharacterCounter` component can be configured using optional props:

```tsx
<CharacterCounter
  minWords={25}
  maxWords={100}
  targetReadingTime={1}
/>
```

These values control:

- Minimum word goal
- Maximum word limit
- Target reading time

## Component Communication

The application uses callbacks to communicate between components.

```text
TextInput
    ↓
onTextChange()
    ↓
CharacterCounter
    ↓
text state
    ↓
Calculate Statistics
    ↓
StatsDisplay
```

The `TextInput` component sends the user's text to `CharacterCounter` using the `onTextChange` callback. The `CharacterCounter` manages the text state, calculates the statistics, and passes the results to `StatsDisplay`.

## Learning Objectives

This project demonstrates:

- React component creation
- TypeScript interfaces
- React state management
- Event handling
- Parent-child component communication
- Callback functions
- `useState`
- `useCallback`
- `useMemo`
- Real-time calculations
- Responsive Tailwind CSS styling
- Accessibility practices

## Author

Truong Pham
