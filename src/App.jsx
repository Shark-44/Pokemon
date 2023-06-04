import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import Navbar from "./Navbar"
import { useEffect } from 'react';
import './App.css'
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
    []);
    




  const [pokemonIndex, setCount] = useState(0);

  if (pokemonIndex === 3) {
    alert('pika pikachu !!!');}

  return(
    <>
    <div>
      <Navbar pokemonIndex={pokemonIndex} setCount={setCount} pokemonList={pokemonList} 
      />
    </div>
    <div class="carte">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
    </>
  );
}
export default App;
