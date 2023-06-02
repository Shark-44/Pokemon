import PokemonCard from "./components/PokemonCard"
import { useState } from "react";

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
  const [pokemonIndex, setCount] = useState(0);

  const handleClick = () => {
    setCount(pokemonIndex + 1)
  }
  return(
    <div>
    {pokemonIndex < pokemonList.length -1 ? ( 
      <input type="button"
       value="suivant"
       onClick={() => setCount(pokemonIndex +1)} />
       ) : null} 

    { pokemonIndex > 0 ? (
      <input type="button"
       value="précédent"
       onClick={() => setCount(pokemonIndex -1)} />

       ) : null }
   
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
     </div>
  );
}
export default App;
