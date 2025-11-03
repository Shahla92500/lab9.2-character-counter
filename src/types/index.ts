
//Create a TextInput component that handles user input and communicates changes to its parent.
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

//Create a StatsDisplay component that shows various statistics about the text.

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

//Create a CharacterCounter component that combines the above components and manages the state.
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}