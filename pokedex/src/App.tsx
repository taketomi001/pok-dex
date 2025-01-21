import "./App.css";
// import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/pokemonCard";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  return (
    <section>
      <div>
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} name={pokemon.name} imgSrc={pokemon.imgSrc} />))}
      </div>
    </section>
  );
}

export default App;
