import React, { useEffect, useState } from 'react'
import Character from '../components/Character';
import './Layout.css'
import Search from '../components/Search';
import Pagination from '../components/Pagination';

const CharacterList = () => {

    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    const [loading, setLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://thronesapi.com/api/v2/Characters');
          const data = await response.json();
          setLoading(false)
          setCharacters(data)
          setFilteredCharacters(data)
        } catch (error) {
          console.error('Error getting datex:', error);
        }
      };
    
      fetchData();
    }, [])


    const handleSearch = (filteredResults) => {
      setFilteredCharacters(filteredResults);
      
    }; 

    if(loading){
      return(
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      )
    }

    const itemsPages = 20;

    const lastItem = currentPage * itemsPages;
    const firstItem = lastItem - itemsPages;
    const currentItems = filteredCharacters.slice(firstItem, lastItem);


  return (
    <div id='container'>
      <div className='img-container'></div>
       <h1>Characters</h1>

      <div className='navbar'>
        <Search  characters={characters}  setFilteredCharacters={handleSearch} setCurrentPage={setCurrentPage}/>

        <Pagination totalItems={filteredCharacters.length} itemsPages={itemsPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>

      <div className='character-list'>
      {filteredCharacters.length > 0 ? (
          currentItems.map((character) => (
            <Character key={character.id} characters={character} />
          ))
        ) : (
          characters.map((character) => (
            <Character key={character.id} characters={character} />
          ))
        )}
      </div>
    </div>
  )
}

export default CharacterList