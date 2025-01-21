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

// const pokemon = { name: "mew", imgSrc: null };
export default function PokemonCard() {
  const pokemon = pokemonList[1];
  console.log(pokemon);
  
  return (
    <>
      <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
}
