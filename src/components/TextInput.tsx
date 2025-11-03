import type { TextInputProps } from "../types";
import { useState } from "react";

 function TextInput ({onTextChange, 
                      placeholder = "Start Typing.....",
                      initialValue = ""} : TextInputProps) {

    const [value, setValue] = useState(initialValue);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const next = e.target.value;
        setValue(next);
        onTextChange (next);
    }

    return (
        <div className="w-full">
        <textarea
            value={value}
            onChange={handleChange}

            placeholder={placeholder}
            rows={8}
             className="bg-white dark:bg-gray-800 w-full p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-300 focus:border-blue-300"
            style={{width: '100%'}}
        />
        </div>
    );
}
export default TextInput;