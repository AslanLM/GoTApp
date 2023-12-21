import React, { useState } from "react";
import './Components.css'

const Search = ({characters, onSearch }) => {

  const [query, setQuery] = useState('')

  const handleSearchChange = (e) => {
    const valueQuery = e.target.value.toLowerCase();
    setQuery(valueQuery);

    if(valueQuery === ''){
      onSearch(characters)
    }else{
      const filtered = characters.filter(
        (character) =>
          character.fullName.toLowerCase().includes(query)
      );
  
      onSearch(filtered);
    }  
  };


  return (
    <div id="search">
        <div className="searchBox">
            <input className="searchInput" type="text" name="search" placeholder="Search" value={query} onChange={handleSearchChange}/>
            <span className="searchButton">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
            >
                <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                />
            </svg>
            </span>
        </div>
    </div>
  );
};

export default Search;
