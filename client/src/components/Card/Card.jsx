import style from "./Card.module.css"

// export default function Card(props) {
//   return (
//     <div className={style.container}>
//         <h1>{props.name}</h1>
//         <img className={`${style.img} ${style.customImg}`} src={props.image} alt={props.name} />
//         {/* <h1>Life: {props.life}</h1>
//         <h1>Attack: {props.attack}</h1>
//         <h1>Defense: {props.defense}</h1>
//         <h1>Speed: {props.speed}</h1>
//         <h1>Height: {props.height}</h1>
//         <h1>Weight: {props.weight}</h1> */}
//         <div>{props.types.map((type)=>{
//             return <h2 key={type}>{type}</h2>
//         })}</div>
//     </div>
//   );
// }

export default function Card(props) {
    return (
      <div className={style.container}>
        <h1 className={style.title}>{props.name}</h1>
        <img className={style.image} src={props.image} alt={props.name} />
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