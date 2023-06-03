import { useSelector } from "react-redux";
import style from "./Stats.module.css";
import { backgorundButtons, changeString } from "../../utils/functionsStyles";
import { styleStats } from "../../utils/stylesStats";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Stats() {
  const pokemon = useSelector((state) => state.pokemon);

  return (
    <div className={style.containerAll}>
      <Link to="/home">
        <img src={logo} alt="logo" className={style.logo} />
      </Link>
      <div className={style.containerID}>
        <div className={style.title}>
          <h2>#{pokemon.id}</h2>
          <h1>{changeString(pokemon.name)}</h1>
        </div>
        <div className={style.types}>
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`${style.type} ${backgorundButtons(type)}`}
            >
              {changeString(type)}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className={style.containerImage}>
          <img className={style.image} src={pokemon.image} alt={pokemon.name} />
          <div>
            <span className={style.height}>
              Height: {pokemon.height / 10} m
            </span>
            <br />
            <span className={style.weight}>
              Weight: {pokemon.weight / 10} kg
            </span>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.habilidades}>
            <span className={style.span}>Attack:</span>
            <div className={style.barra}>
              <div
                className={`${style.progreso} ${styleStats("attack")}`}
                style={{ "--w": `${pokemon.attack / 2}%` }}
              ></div>
            </div>
            <span className={style.points}>{pokemon.attack}</span>
          </div>
          <div className={style.habilidades}>
            <span className={style.span}>Defense:</span>
            <div className={style.barra}>
              <div
                className={`${style.progreso} ${styleStats("defense")}`}
                style={{ "--w": `${pokemon.defense / 2}%` }}
              ></div>
            </div>
            <span className={style.points}>{pokemon.defense}</span>
          </div>
          <div className={style.habilidades}>
            <span className={style.span}>Life:</span>
            <div className={style.barra}>
              <div
                className={`${style.progreso} ${styleStats("life")}`}
                style={{ "--w": `${pokemon.life / 2}%` }}
              ></div>
            </div>
            <span className={style.points}>{pokemon.life}</span>
          </div>
          <div className={style.habilidades}>
            <span className={style.span}>Speed:</span>
            <div className={style.barra}>
              <div
                className={`${style.progreso} ${styleStats("speed")}`}
                style={{ "--w": `${pokemon.speed / 2}%` }}
              ></div>
            </div>
            <span className={style.points}>{pokemon.speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
