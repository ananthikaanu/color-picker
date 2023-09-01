import React, { useState } from 'react';
import Button from "./components/Button";
import CustomInput from "./components/CustomInput";
import "./App.css";

const App = () => {
  const defaultColors = [
    { hex: '#FF5733', name: 'Red' },
    { hex: '#FFC300', name: 'Yellow' },
    { hex: '#008000', name: 'Green' },
    { hex: '#339CFF', name: 'Blue' },
    { hex: '#9933FF', name: 'Purple' },
    { hex: '#FF33E9', name: 'Pink' },
  ];

  const [selectedColor, setSelectedColor] = useState(defaultColors[0].hex);
  const [customColor, setCustomColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState(selectedColor);

  const handleColorChange = (hex) => {
    setSelectedColor(hex);
    setBackgroundColor(hex);
  };

  const handleCustomColorChange = (event) => {
    const newColor = event.target.value;
    setCustomColor(newColor);

  };

  const handleCustomColorSubmit = () => {
    if (customColor) {
      setSelectedColor(customColor);
      setBackgroundColor(customColor);
    }
  };

  return (
    <div className="color-picker-app" style={{ backgroundColor }}>
      <h1>Color Picker </h1>
      <h2>Try Clicking any one of the colors below to change the background Color of the page!</h2>
      <div className="color-buttons">
        {defaultColors.map((color) => (
          <Button
            key={color.hex}
            color={color}
            onSelectColor={handleColorChange}
            isSelected={selectedColor === color.hex}
          />
        ))}
      </div>
      <CustomInput
        customColor={customColor}
        onCustomColorChange={handleCustomColorChange}
        onCustomColorSubmit={handleCustomColorSubmit}
      />
    <div
    className="color-display"
    style={{ backgroundColor: backgroundColor }}
  >
   <span className="selected-color-text">Selected Color:</span>{" "}
        <span className="selected-color">{backgroundColor}</span> 
  </div>
</div>
  );
};

export default App;
