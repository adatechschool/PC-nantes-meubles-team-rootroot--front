//ColorDropDown in component
import React, { useState, useEffect } from 'react';

function ColorDropdown(props) {
    //const color = props.color;
    const value = props.value;
    const onClick = props.onClick;
  const [colors, setColors] = useState([]);

  useEffect(() => {
    async function fetchColors() {
      try {
        const response = await fetch('http://127.0.0.1:8000/get_all_card_meuble');
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
      <select id="color">
        {colors.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
    </div>
  );
}

export default ColorDropdown;