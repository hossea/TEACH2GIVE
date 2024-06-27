//Design a function that takes a list of integers as input. The function should
//return True if the list contains two consecutive threes (3 next to a 3) anywhere
//within the list. Otherwise, it should return False. For example, the function
//should return True for [1, 3, 3] and False for [1, 3, 1, 3].

import React, { useState } from 'react';
import './ConsecutiveThreesChecker.css'; 

const ConsecutiveThreesChecker = () => {
  const [inputValue, setInputValue] = useState('');
  const [hasConsecutiveThrees, setHasConsecutiveThrees] = useState(null);

  const checkConsecutiveThrees = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === 3 && arr[i + 1] === 3) {
        return true;
      }
    }
    return false;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
    const intArray = value.split(',').map(Number);

    const result = checkConsecutiveThrees(intArray);
    setHasConsecutiveThrees(result);
  };

  return (
    <div className="checker-container">
      <h1>Consecutive Threes Checker</h1>
      <input type="text" value={inputValue} onChange={handleInputChange}
        placeholder="Enter a list of integers separated by commas" />
      {hasConsecutiveThrees !== null && (
        <p>{hasConsecutiveThrees ? 'The list contains consecutive threes!' : 'The list does not contain consecutive threes.'}</p>
      )}
    </div>
  );
};
export default ConsecutiveThreesChecker;
