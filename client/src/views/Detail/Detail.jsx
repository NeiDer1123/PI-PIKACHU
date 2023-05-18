import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../redux/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Detail() {
    const { pokemonId } = useParams();
    // const numberId = parseInt(pokemonId)
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemon);

    useEffect(() => {
      dispatch(getPokemonById(pokemonId));
    }, [dispatch]);

  return (
    <div>
      {pokemon.length <= 0 && <div>Loading...</div> }
      <img src={pokemon.image} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <h3>{pokemon.attack}</h3>
      <h3>{pokemon.defense}</h3>
      <h3>{pokemon.life}</h3>
      <h3>{pokemon.speed}</h3>
    </div>
  );
}
