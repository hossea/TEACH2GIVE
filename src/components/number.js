//Design a function that reverses the digits of an integer. For example, 50
//should become 5 and -12 should become -21
import React, { useState } from 'react';
import './number.css'; 

const ReverseDigits = () => {
  const [inputValue, setInputValue] = useState('');
  const [reversedValue, setReversedValue] = useState('');

  const reverseDigits = (num) => {
    const isNegative = num < 0;
    const numStr = Math.abs(num).toString();
    
    const reversedStr = numStr.split('').reverse().join('');
    const reversedNum = isNegative ? -parseInt(reversedStr) : parseInt(reversedStr);  
    return reversedNum;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!isNaN(value)) {
      const reversed = reverseDigits(parseInt(value));
      setReversedValue(reversed);
    } else {
      setReversedValue('');
    }
  };
  return (
    <div className="reverse-digits-container">
      <h1>Reverse Digits</h1>
      <input type="text" value={inputValue} onChange={handleInputChange}
        placeholder="Enter an integer" />
      <p>Reversed: {reversedValue}</p>
    </div>
  );
};
export default ReverseDigits;
