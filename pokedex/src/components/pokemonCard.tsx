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

export default function PokemonCard() {
  return pokemonList.map((pokemon) => (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  ));
}
