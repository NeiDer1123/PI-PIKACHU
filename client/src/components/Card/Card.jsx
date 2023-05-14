import style from "./Card.module.css"

export default function Card(props) {
    return (
      <div className={style.container}>
        <h1 className={style.title}>{props.name}</h1>
        <img className={`${style.img} ${style.customImg}`} src={props.image} alt={props.name} />
        <div className={style.types}>
          {props.types.map((type) => (
            <span key={type} className={style.type}>
              {type}
            </span>
          ))}
        </div>
      </div>
    );
  }