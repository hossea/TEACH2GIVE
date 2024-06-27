//Design a function that takes a string or sequence of characters as input and
//returns the character that appears most frequently.
//Eg 11189 => '1'
//hello => l
import React, { useState } from 'react';
import './FrequentCharacter.css';

const FrequentCharacter = () => {
  const [inputValue, setInputValue] = useState('');
  const [mostFrequentChar, setMostFrequentChar] = useState('');

  const findMostFrequentChar = (str) => {
    if (str.length === 0) return '';

    const charCount = {};
    let maxCount = 0;
    let maxChar = '';

    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        maxChar = char;
      }
    }
    return maxChar;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const mostFrequent = findMostFrequentChar(value);
    setMostFrequentChar(mostFrequent);
  };

  return (
    <div className="frequent-char-container">
      <h1>Most Frequent Character Finder</h1>
      <input type="text" value={inputValue} onChange={handleInputChange}
        placeholder="Enter a string" />
      <p>Most Frequent Character: {mostFrequentChar}</p>
    </div>
  );
};

export default FrequentCharacter;
