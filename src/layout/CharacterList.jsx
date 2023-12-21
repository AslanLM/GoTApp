import React, { useEffect, useState } from 'react'
import Character from '../components/Character';
import './Layout.css'
import Search from '../components/Search';

const CharacterList = () => {

    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://thronesapi.com/api/v2/Characters');
          const data = await response.json();
          setLoading(false)
          setCharacters(data)
          setFilteredCharacters(data)
        } catch (error) {
          console.error('Error al obtener datos:', error);
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


  return (
    <div id='container'>
      <div className='img-container'></div>
      <h1>Characters</h1>

      <Search  characters={characters}  onSearch={handleSearch}/>

      <div className='character-list'>
      {filteredCharacters.length > 0 ? (
          filteredCharacters.slice(0, 52).map((character) => (
            <Character key={character.id} characters={character} />
          ))
        ) : (
          characters.slice(0, 52).map((character) => (
            <Character key={character.id} characters={character} />
          ))
        )}
      </div>
    </div>
  )
}

export default CharacterList