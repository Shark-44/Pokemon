import './Navbar.css'

const Navbar =({handleClickM, handleClickS, pokemonIndex, pokemonList}) => {
return (
    <>
    { pokemonIndex > 0 ? (<input class="styled" type="button" value="précédent"onClick={handleClickM} />) : null }
    {pokemonIndex < pokemonList.length -1 ? (<input class="styled" type="button" value="suivant" onClick={handleClickS} />) : null} 
    </>
    )};
    
    export default Navbar;