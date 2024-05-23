import React, { useState, useEffect } from 'react';
import '../../../../public/publicNath/styles/global2.css'
import { axiosInstance } from '../../../axios';

const DropdownMenu = ({onCategoryChange, selectedCategory}) => {
const [options, setOptions] = useState([]);
	
useEffect(() => { fetchCategories()}, [])

const fetchCategories = () => {
  axiosInstance.get("/categorie")
    .then(function (response) {
      if (response.status === 200) {
        const allCategories = response.data.map(item => item.nomCat);
        setOptions(["All", ...allCategories]);
        console.log(options)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
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