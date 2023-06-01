import { nextPage, previousPage, setInput, setPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Paginate.module.css";

export default function Paginate({ maximo }) {
  const dispatch = useDispatch();
  const inputPage = useSelector((state) => state.inputPage);

  const next = () => {
    dispatch(nextPage());
  };

  const previous = () => {
    dispatch(previousPage());
  };

  const onKeyDown = (e) => {
    const page = parseInt(e.target.value);
    if (e.keyCode === 13) {
      if (page < 1 || page > maximo || isNaN(page)) {
        dispatch(setPage(1));
        dispatch(setInput(1));
      } else {
        dispatch(setPage(page));
      }
    }
  };

  const onChange = (e) => {
    dispatch(setInput(e.target.value));
  };

  return (
    <div className={style.container}>
      <button onClick={previous} className={style.button}>
        {"<<"}
      </button>
      <input
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        className={style.input}
        name="page"
        value={inputPage}
        autoComplete="off"
      />
      <span> de {maximo}</span>
      <button onClick={next} className={style.button}>
        {">>"}
      </button>
    </div>
  );
}
