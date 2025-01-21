import "../App"
interface pokemon{
  name: string;
  imgSrc ? : string;
}

export default function PokemonCard({name, imgSrc}:pokemon) {
  return (
    <>
      <figure>
        {imgSrc ? <img src={imgSrc} /> : <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>
    </>
  );
}