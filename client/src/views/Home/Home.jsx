import { CardsContainer} from "../../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll, getPokemons} from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    dispatch(getPokemons())
  }, [dispatch]);

  return (
    <div>
      <CardsContainer />
    </div>
  );
}
