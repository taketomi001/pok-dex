import "../App";
interface pokemon {
  name: string;
  imgSrc?: string;
}


export default function PokemonCard({ imgSrc, name }: pokemon) {
  return (
    <>
      <figure>
        {imgSrc ? <img src={imgSrc} /> : <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>
    </>
  );
}
