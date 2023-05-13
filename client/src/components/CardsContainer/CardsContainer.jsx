import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardsContainer() {
  const pokemons = [
    {
      id: 1,
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      life: 45,
      attack: 49,
      defense: 49,
      speed: 45,
      height: 7,
      weight: 69,
      types: ["grass", "poison"],
    },
    {
      id: 2,
      name: "ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      life: 60,
      attack: 62,
      defense: 63,
      speed: 60,
      height: 10,
      weight: 130,
      types: ["grass", "poison"],
    },
    {
      id: 3,
      name: "venusaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      life: 80,
      attack: 82,
      defense: 83,
      speed: 80,
      height: 20,
      weight: 1000,
      types: ["grass", "poison"],
    },
    {
      id: 4,
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      life: 39,
      attack: 52,
      defense: 43,
      speed: 65,
      height: 6,
      weight: 85,
      types: ["fire"],
    },
    {
      id: 5,
      name: "charmeleon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      life: 58,
      attack: 64,
      defense: 58,
      speed: 80,
      height: 11,
      weight: 190,
      types: ["fire"],
    },
  ];
  return (
    <div className={style.container}>
      {pokemons.map((poke) => {
        return (
          <Card
            key={poke.id}
            id={poke.id}
            name={poke.name}
            image={poke.image}
            //  life={poke.life}
            //  attack={poke.attack}
            //  defense={poke.defense}
            //  speed={poke.speed}
            //  height={poke.height}
            //  weight={poke.weight}
            types={poke.types}
          />
        );
      })}
    </div>
  );
}
