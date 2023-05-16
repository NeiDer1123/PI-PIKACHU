import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardsContainer() {

  const pokemons = useSelector(state=>state.pokemons)

  return (
    <div className={style.container}>
      {pokemons.map((poke, index) => {
        return (
          <Card
            key={index}
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
