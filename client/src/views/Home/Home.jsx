import { CardsContainer } from "../../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch]);

  return (
    <div>
      <h1>Esta el la vista del HOME</h1>
      <CardsContainer />
    </div>
  );
}
