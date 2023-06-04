import './Navbar.css'

const Navbar =({setCount, pokemonIndex, pokemonList}) => {
   return(
      <>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <button class="styled" key={pokemon.name} onClick={() => {setCount((pokemonIndex))}}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
};

   

    export default Navbar;