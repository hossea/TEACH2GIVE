//Write a recursive function to calculate the factorial of a number.
import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [factorialValue, setFactorialValue] = useState('');

  const calculateFactorial = (num) => {

    if (num < 0) {
      return 'Undefined'; 
    }
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * calculateFactorial(num - 1);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!isNaN(value) && value !== '') {
      const factorial = calculateFactorial(parseInt(value));
      setFactorialValue(factorial);
    } else {
      setFactorialValue('');
    }
  };

  return (
    <div className="calculator-container">
      <h1>Factorial Calculator</h1>
      <input type="text" value={inputValue} onChange={handleInputChange}
        placeholder="Enter a non-negative integer"
      />
      <p>Factorial: {factorialValue}</p>
    </div>
  );
};
export default Calculator;
