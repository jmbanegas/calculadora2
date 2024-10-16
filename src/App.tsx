import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import './App.css'; // Añade tu CSS para el diseño

const App: React.FC = () => {
  const [input, setInput] = useState<string>(''); // Estado para la entrada
  const [operator, setOperator] = useState<string | null>(null); // Operador actual
  const [result, setResult] = useState<number | null>(null); // Resultado

  const handleButtonClick = (value: string): void => {
    setInput((prevInput) => prevInput + value);
  };

  const handleOperatorClick = (operator: string): void => {
    if (input) {
      setResult(parseFloat(input));
      setInput('');
      setOperator(operator);
    }
  };

  const calculateResult = (): void => {
    if (input && result !== null) {
      const numInput = parseFloat(input);
      let tempResult: number = result;

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
      setOperator(null);
    }
  };

  const clearInput = (): void => {
    setInput('');
    setResult(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <Display value={input || result?.toString() || '0'} />
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
      </div>
    </div>
  );
};

export default App;
