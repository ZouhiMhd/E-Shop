import { useState } from "react";

export const SearchBar = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const handleButtonClick = () => {
          setIsOpen(!isOpen);
        };
      
        return (
        <>
        {isOpen && <input placeholder="Rechercher..." />}
        <button onClick={handleButtonClick}>
        <i className="fa fa-search"></i>
        </button>
        </>);
}