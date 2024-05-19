import { IoFilter } from "react-icons/io5";
import DropdownMenu from './Dropdown';


const FilterSection = ({ numbArticles, selectedCategory, onCategoryChange }) => (
    <div className='align'>
        <div className="left">
            <IoFilter size='24'/>
            <p>Filter</p>
            <hr/>
            <p>Showing 1–16 of {numbArticles} results</p>
        </div>
        <div className='Drop'>
            <label htmlFor="category">Filter by category : </label>
            <DropdownMenu onCategoryChange={onCategoryChange} selectedCategory={selectedCategory} />
        </div>
    </div>
);

export default FilterSection