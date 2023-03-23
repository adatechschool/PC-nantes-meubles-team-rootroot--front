import React, { useState, useEffect } from 'react';
import './DropdownButton.css';


function CategoryDropDownButton(props) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategory = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    props.onCategorySelect(selectedCategory); // Pass the selected category to the onCategorySelect prop
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('http://127.0.0.1:8000/get_all_meuble');
        const data = await response.json();
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div>
      <select className="select" onChange={handleCategory}>
        <option value="" disabled selected>Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryDropDownButton;