interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

export default function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
  const handlePokemonClick = (index: number) => {
    setPokemonIndex(index);
    const selectPikachu = pokemonList[index];
    // console.log(index);
    if (selectPikachu.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handlePokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}
