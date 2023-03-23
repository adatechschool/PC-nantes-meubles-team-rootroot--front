import React, { useState, useEffect } from 'react';
import './DropdownButton.css';


function ColorDropDownButton(props) {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColor = (event) => {
    const selectedColor = event.target.value;
    setSelectedColor(selectedColor);
    props.onColorSelect(selectedColor); // Pass the selected color to the onColorSelect prop
  };

  useEffect(() => {
    async function fetchColors() {
      try {
        const response = await fetch('http://127.0.0.1:8000/get_all_meuble');
        const data = await response.json();
        const uniqueColors = [...new Set(data.map(item => item.color))];
        setColors(uniqueColors);
      } catch (error) {
        console.log(error);
      }
    }
    fetchColors();
  }, []);

  return (
    <div>
      <select className="select" onChange={handleColor}>
        <option value="" disabled selected>Select a color</option>
        {colors.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
    </div>
  );
}

export default ColorDropDownButton;