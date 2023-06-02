

const Navbar =({handleClickM, handleClickS, pokemonIndex, pokemonList}) => {
return (
    <>
    { pokemonIndex > 0 ? (<input type="button" value="précédent"onClick={handleClickM} />) : null }

{pokemonIndex < pokemonList.length -1 ? (<input type="button" value="suivant" onClick={handleClickS} />) : null} 

</>)};
    
    export default Navbar;