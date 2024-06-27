//Master Yoda, a renowned Jedi Master from the Star Wars universe, is known
//for his unique way of speaking. He often reverses the order of words in his
//sentences. For example, instead of saying "I am home" he might say "Home
//am I" Design a function that takes a sentence as input and returns a new
//sentence with the words reversed in the same order that Master Yoda would use.

import React, { useState } from 'react';
import './SentenceReverser.css'; // Import the CSS file

const SentenceReverser = () => {
  const [inputValue, setInputValue] = useState('');
  const [reversedSentence, setReversedSentence] = useState('');

  const reverseWords = (sentence) => {
    return sentence.split(' ').reverse().join(' ');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const reversed = reverseWords(value);
    setReversedSentence(reversed);
  };

  return (
    <div className="reverser-container">
      <h1>Yoda Sentence Reverser</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a sentence"
      />
      <p>Reverse Style: {reversedSentence}</p>
    </div>
  );
};

export default SentenceReverser;
