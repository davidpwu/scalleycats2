import { useEffect, useState } from 'react';
import './App.css';

import CardList from './components/card-list/card-list';
import SearchField from './components/search-field/search-field';

function App() {  
  // State
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [input, setInput] = useState('');

  // Effects
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseCats) => setCats(responseCats))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setFilteredCats(
      cats.filter((cat) => cat.name.toLowerCase().includes(input.toLowerCase()))
    );
  }, [cats, input]);

  // Event handlers
  const onInputChange = (event) => setInput(event.target.value);

  return (
    <div className="App">
      <h1 className="app-title">ScAlleyCats 2.0</h1>
      <SearchField onChangeHandler={onInputChange} />
      <CardList cats={filteredCats} />
    </div>
  );
}

export default App;
