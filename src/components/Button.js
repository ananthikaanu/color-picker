
import React from 'react';
import "./Button.css";
const Button = ({ color, onSelectColor }) => {
  return (
    <button
    className="button1"
    style={{ backgroundColor: color.hex}}
    onClick={() => onSelectColor(color.hex)}
  >
  {color.hex}
  </button>
  );
  };
export default Button;