import React, { useState, useEffect } from 'react';
import '../../../../public/publicNath/styles/global2.css'


const DropdownMenu = ({onCategoryChange, selectedCategory}) => {
  const options = ['All', 'homme', 'Femme', 'enfant','Mixte'];



  const handleChange = (event) => {
    const category = event.target.value
    onCategoryChange(category);
  };

  return (
    <div >
        <select
            className="shop-dropdown-menu"
            value={selectedCategory}
            onChange={handleChange}
        >
            {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
            ))}
        </select>
    </div>
  );
};

export default DropdownMenu;