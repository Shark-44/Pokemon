import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import Navbar from "./Navbar"
import { useEffect } from 'react';
const pokemonList = [
     {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
function App() {
          
  useEffect(

    () =>  {
      alert("hello pokemon trainer :)");
     
    }, 
    []
 );




  const [pokemonIndex, setCount] = useState(0);

  const handleClickS = () => {
  setCount(pokemonIndex + 1)}

  const handleClickM = () => {
    setCount(pokemonIndex - 1)}
   
  useEffect(() =>  {
      if (pokemonIndex === 3) {
        alert('pika pikachu !!!');}
        },
       [pokemonIndex]);
 
  return(
    <>
    <div>
      <Navbar
       handleClickM={handleClickM}
       handleClickS={handleClickS} 
       pokemonIndex={pokemonIndex}
       pokemonList={pokemonList}
              />
    </div>
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
    </>
  );
}
export default App;
