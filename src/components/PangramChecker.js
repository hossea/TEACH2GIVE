//Design a function that determines whether a given string is a pangram. A
//pangram is a sentence or phrase containing every letter of the alphabet at
//least once. Punctuation and case are typically ignored. For example, the
//string "The quick brown fox jumps over the lazy dog" is a pangram, while
//"Hello, world!" is not.
import React, { useState } from 'react';
import './PangramChecker.css';

const PangramChecker = () => {
  const [inputValue, setInputValue] = useState('');
  const [isPangram, setIsPangram] = useState(null);

  const checkPangram = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseStr = str.toLowerCase();

    for (let char of alphabet) {
      if (!lowerCaseStr.includes(char)) {
        return false;
      }
    }
    return true;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const result = checkPangram(value);
    setIsPangram(result);
  };

  return (
    <div className="pangram-container">
      <h1>Pangram Checker</h1>
      <input type="text" value={inputValue} onChange={handleInputChange}
        placeholder="Enter a string"/>

      {isPangram !== null && (
        <p>{isPangram ? 'The string is a pangram!' : 'The string is not a pangram.'}</p>
      )}
    </div>
  );
};
export default PangramChecker;
