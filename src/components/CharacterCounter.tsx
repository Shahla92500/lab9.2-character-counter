import type { CharacterCounterProps, TextStats  } from "../types";
import {useState} from "react";
import TextInput from "./TextInput";
import StatsDisplay from "./StatsDisplay";


function CharacterCounter({minWords, maxWords, targetReadingTime}: CharacterCounterProps) {
  const [text, setText] = useState('');
 
  // compute stats based on latest text (text) found in internal memory (from useState)
  const computeStats = (t: string): TextStats => {      
    const characterCount=t.length
    const trimedText = t.trim();
    const wordCount= trimedText ? trimedText.split(/\s+/).length : 0;
    const readingTime = wordCount / 200;
    return { characterCount, wordCount, readingTime };
  };
  const willExceedWords = (t: string) => {
    const words = t.trim() ? t.trim().split(/\s+/).length : 0;
    
    return typeof maxWords === 'number' && words >maxWords ;
  };

  const stats = computeStats(text);   // call this function to compute stats 

  // handleTextChange is the function the child will call (callback)
  const handleTextChange = (next: string) => {
    console.log('typed ', next.length)
    if (willExceedWords(next)) return;
    
    setText(next); // ⟵ parent state update
    
  };

  return (
    <div className="max-w-3xl mx-auto">
      <TextInput 
          onTextChange={handleTextChange} 
          placeholder = "Start Typing....." 
          initialValue = "" 
      />
      <StatsDisplay stats={stats} 
                    showReadingTime ={true} 
                    minWords={minWords}
                    maxWords={maxWords}/>

    </div>
    )
}

export default CharacterCounter;