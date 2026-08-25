export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number;
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number;
}

export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number;
}