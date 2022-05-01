import './search-field.css';

function SearchField({ onChangeHandler }) {
  return (
    <input
      className="search-field"
      type="search"
      onChange={onChangeHandler} 
      placeholder="Enter name here" 
    />
  );
}

export default SearchField;
