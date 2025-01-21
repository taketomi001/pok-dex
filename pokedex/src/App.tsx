import "./App.css";
import { useState } from "react";
// import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/pokemonCard";

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
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const nextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const prevPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const pokemon = pokemonList[pokemonIndex];

  return (
    <section>
      <div>
        <PokemonCard
          // key={pokemon.name}
          name={pokemon.name}
          imgSrc={pokemon.imgSrc}
        />
      </div>
      {pokemonIndex > 0 && (
        <button onClick={prevPokemon} className="prev">
          precedent
        </button>
      )}

      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon}>next</button>
      )}
    
    </section>
  );
}

export default App;
