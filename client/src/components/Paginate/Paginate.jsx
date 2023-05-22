import { nextPage, previousPage } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from './Paginate.module.css'

export default function Paginate({pokemonsPerPage,filteredPokemon, currentPage }) {

  const dispatch = useDispatch();

  const next = () => {
    if (filteredPokemon.length < pokemonsPerPage) {
      return;
    }
    dispatch(nextPage());
  };

  const previous = () => {
    if (currentPage > 0) {
      dispatch(previousPage());
    }
  };

  return (
    <div className={style.buttonContainer}>
      <button onClick={previous} className={style.button}>
        Previous
      </button>
      <button onClick={next} className={style.button}>
        Next
      </button>
    </div>
  );
}
