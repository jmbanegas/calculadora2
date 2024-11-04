import React, { useState } from 'react';
import Screen from './components/Screen';
import Button from './components/Button';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>(''); 
  const [operator, setOperator] = useState<string | null>(null); 
  const [result, setResult] = useState<number | null>(null);
  const [lastInput, setLastInput] = useState<number | null>(null); // Último número ingresado para repetir la operación

  const handleButtonClick = (value: string): void => {
    setInput((prevInput) => prevInput + value);
  };

  const handleOperatorClick = (operator: string): void => {
    if (input) {
      setResult(parseFloat(input));
      setInput('');
      setOperator(operator);
      setLastInput(parseFloat(input)); // Guardar el último número ingresado
    }
  };

  const calculateResult = (): void => {
    let tempResult: number = result ?? 0;
    const numInput = input ? parseFloat(input) : lastInput; // Usar input o el último número si input está vacío

    if (numInput !== null && operator) {
      switch (operator) {
        case '+':
          tempResult += numInput;
          break;
        case '-':
          tempResult -= numInput;
          break;
        case '*':
          tempResult *= numInput;
          break;
        case '/':
          tempResult /= numInput;
          break;
        default:
          return;
      }

      setResult(tempResult);
      setInput('');
      setLastInput(numInput); // Actualizar el último número utilizado
    }
  };

  const clearInput = (): void => {
    setInput('');
    setResult(null);
    setOperator(null);
    setLastInput(null);
  };

  return (
    <div className="calculator">
      <Screen value={input || result?.toString() || '0'} />
      <div className="buttons">
        <Button text="7" handleClick={handleButtonClick} />
        <Button text="8" handleClick={handleButtonClick} />
        <Button text="9" handleClick={handleButtonClick} />
        <Button text="/" handleClick={() => handleOperatorClick('/')} />

        <Button text="4" handleClick={handleButtonClick} />
        <Button text="5" handleClick={handleButtonClick} />
        <Button text="6" handleClick={handleButtonClick} />
        <Button text="*" handleClick={() => handleOperatorClick('*')} />

        <Button text="1" handleClick={handleButtonClick} />
        <Button text="2" handleClick={handleButtonClick} />
        <Button text="3" handleClick={handleButtonClick} />
        <Button text="-" handleClick={() => handleOperatorClick('-')} />

        <Button text="0" handleClick={handleButtonClick} />
        <Button text="C" handleClick={clearInput} />
        <Button text="=" handleClick={calculateResult} />
        <Button text="+" handleClick={() => handleOperatorClick('+')} />

        <Button text="." handleClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;
