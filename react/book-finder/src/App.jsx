import { useEffect, useState } from 'react';
import './App.css';
import { search } from './api/api_service';
import BookList from './components/BookList.jsx';
import Book from './model/book.js';
function App() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState(null);
  
  const handleSearch = async () => {
    if(!searchValue) return;
    setSearchResult(await search(searchValue.toLowerCase()));
    setSearchValue('');
  }

  const formatData = (data) => {
    return data.map((book)=>new Book({...book}));
  }
  
  const handleInput = (e) => {
    setSearchValue(e.target.value);
  }
  return (
    <>
      <div>
        Search Books
      </div>
      <input value={searchValue} onChange={handleInput} placeholder='Search here...'/>
      <button onClick={handleSearch}> Search </button>
      <BookList books={formatData(searchResult ?? [])}/>
    </>
  )
}

export default App
