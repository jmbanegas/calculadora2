import React from 'react';

interface ButtonProps {
  text: string;
  handleClick: (value: string) => void;
}

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button className="Button" onClick={() => handleClick(text)}>
      {text}
    </button>
  );
};

export default Button;
