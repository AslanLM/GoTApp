import React from "react";


const Character = ({characters}) => {
  return (
    <div id="characters">
       <div className="clip-path"></div>
      <img className="ch-img" src={characters.imageUrl} alt={characters.firstName} />
      <div className="ch-container">
          <h2>{characters.fullName}</h2>
          <p><span>title: </span>{characters.title}</p>
          <p><span>house: </span>{characters.family}</p>
      </div>
    </div>
  )
}

export default Character;
