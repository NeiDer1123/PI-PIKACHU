import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getPokemonById} from "../../redux/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import pokebola from "../../assets/pokebola.gif";
import { Stats } from "../../components";
import style from "./Detail.module.css"

export default function Detail() {
  const { pokemonId } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon)

  useEffect(() => {
    dispatch(getPokemonById(pokemonId));
  }, [dispatch, pokemonId]);

  return (
    <div>
      {pokemon.length <= 0 ? (
        <div className={style.container}>
          {/* <div>Loading...</div> */}
          <img src={pokebola} alt="pokebola" />
        </div>
      ) : (
        <Stats/>
      )}
    </div>
  );
}
