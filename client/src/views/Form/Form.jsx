import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";
import validate from "./validate";
import axios from "axios";
import style from "./Form.module.css";
import pikachu from "../../assets/pikachu.gif";

export default function Form() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    life: "",
    image: "",
    types: [],
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    life: "",
    image: "",
    types: [],
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const onChangeText = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value.toLowerCase() });
    setErrors(
      validate({
        ...form,
        [event.target.name]: event.target.value.toLowerCase(),
      })
    );
  };

  const onChangeNumber = (event) => {
    setForm({ ...form, [event.target.name]: parseInt(event.target.value) });
    setErrors(
      validate({ ...form, [event.target.name]: parseInt(event.target.value) })
    );
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    // console.log(checked)
    // console.log(form.types)
    if (checked) {
      const typeIndex = types.findIndex((type) => type.name === value);
      setForm({
        ...form,
        types: [...form.types, typeIndex + 1],
      });
      setErrors(
        validate({
          ...form,
          types: [...form.types, typeIndex + 1],
        })
      );
    } else {
      const typeIndex = types.findIndex((type) => type.name === value);
      setForm({
        ...form,
        types: form.types.filter((type) => type !== typeIndex + 1),
      });
      setErrors(
        validate({
          ...form,
          types: form.types.filter((type) => type !== typeIndex + 1),
        })
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (errors.name || errors.life || errors.types) {
      alert("Debes cumplir con todos los requisitos para crear un Pokemon");
    } else {
      try {
        await axios.post("http://localhost:3001/pokemons", form);
        dispatch(getPokemons())
        console.log(form);
        setForm({
          name: "",
          life: "",
          image: "",
          types: [],
          attack: "",
          defense: "",
          speed: "",
          height: "",
          weight: "",
        });
        alert("¡Pokemon Creado!")
      } catch (error) {
        alert(error.response.data.error)
      }
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.formGroup}>
          <div className={style.label}>
            <label>Name</label>
            <div>
              <input
                type="text"
                value={form.name}
                name="name"
                onChange={onChangeText}
                className={style.input}
              />
            </div>
          </div>

          <div className={style.label}>
            <label>Image</label>
            <div>
              <input
                type="text"
                value={form.image}
                name="image"
                onChange={onChangeText}
                className={style.input}
              />
            </div>
          </div>

          <div className={style.label}>
            <label>Life</label>
            <div>
              <input
                type="number"
                value={form.life}
                name="life"
                onChange={onChangeNumber}
                className={style.input}
              />
            </div>
          </div>

          <div className={style.label}>
            <label>Attack</label>
            <div>
              <input
                type="number"
                value={form.attack}
                name="attack"
                onChange={onChangeNumber}
                className={style.input}
              />
            </div>
          </div>

          <div className={style.label}>
            <label>Defense</label>
            <div>
              <input
                type="number"
                value={form.defense}
                name="defense"
                onChange={onChangeNumber}
                className={style.input}
              />
            </div>
          </div>

          <div className={style.label}>
            <label>Speed</label>
            <div>
              <input
                type="number"
                value={form.speed}
                name="speed"
                onChange={onChangeNumber}
                className={style.input}
              />
            </div>
          </div>

          <div className={style.label}>
            <label>Height in cm</label>
            <div>
              <input
                type="number"
                value={form.height}
                name="height"
                onChange={onChangeNumber}
                className={style.input}
              />
            </div>
          </div>

          <div className={style.label}>
            <label>Weight in Kg</label>
            <div>
              <input
                type="number"
                value={form.weight}
                name="weight"
                onChange={onChangeNumber}
                className={style.input}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={style.types}>
            {types.map((type, index) => (
              <div key={type.name}>
                  <input
                    type="checkbox"
                    value={type.name}
                    // checked={form.types.includes(index + 1)}
                    onChange={handleCheckboxChange}
                  />
                <label className={style.labelType}>
                  {type.name}
                </label>
              </div>
            ))}
          </div>
          <div className={style.errors}>
            {errors.name && <p className={style.error}> - {errors.name}</p>}
            {errors.image && <p className={style.error}> - {errors.image}</p>}
            {errors.life && <p className={style.error}> - {errors.life}</p>}
            {errors.attack && <p className={style.error}> - {errors.attack}</p>}
            {errors.defense && <p className={style.error}> - {errors.defense}</p>}
            {errors.speed && <p className={style.error}> - {errors.speed}</p>}
            {errors.height && <p className={style.error}> - {errors.height}</p>}
            {errors.weight && <p className={style.error}> - {errors.weight}</p>}
            {errors.types && <p className={style.error}> - {errors.types}</p>}
          </div>
        </div>
        <input type="submit" value="Submit" className={style.submit} />
      </form>
      <div className={style.imageContainer}>
        <img className={style.image} src={pikachu} alt="pikachu" />
      </div>
    </div>
  );
}
