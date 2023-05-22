import { CardsContainer} from "../../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll} from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <div>
      <CardsContainer />
    </div>
  );
}
