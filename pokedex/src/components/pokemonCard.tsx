import "../App"
// const pokemon = { name: "mew", imgSrc: null };
export default function PokemonCard({pokemon}) {
  return (
    <>
      <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
}