import React from 'react'
import "./CustomInput.css";
const CustomInput = ({ customColor, onCustomColorChange, onCustomColorSubmit }) => {
  return (
    <div className="custom-input">
        <input
        type="text"
        placeholder="Enter custom color hex"
        value={customColor}
        onChange={onCustomColorChange}
      />
      <button onClick={onCustomColorSubmit}>Apply Custom Color</button>
    </div>
  )
}

export default CustomInput