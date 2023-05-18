import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../redux/actions";
import validate from "./validate";
import axios from "axios";

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
    weight: ""
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
    weight: ""
  });

  const onChangeText = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
      setErrors(validate({ ...form, [event.target.name]: event.target.value }));
  };

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: parseInt(event.target.value) });
    setErrors(validate({ ...form, [event.target.name]: parseInt(event.target.value) }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if(errors.name || errors.life || errors.types){
      alert('Debes cumplir con todos los requisitos para crear un Pokemon')
    } else {
      axios.post("http://localhost:3001/pokemons", form)
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
        weight: ""
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={form.name} name="name" onChange={onChangeText} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Image:</label>
        <input type="text" value={form.image} name="image" onChange={onChangeText} />
        {errors.image && <span>{errors.image}</span>}
      </div>
      <div>
        <label>Life:</label>
        <input type="number" value={form.life} name='life' onChange={onChange} />
        {errors.life && <span>{errors.life}</span>}
      </div>
      <div>
        <label>Attack:</label>
        <input type="number" value={form.attack} name='attack' onChange={onChange} />
        {errors.attack && <span>{errors.attack}</span>}
      </div>
      <div>
        <label>Defense:</label>
        <input type="number" value={form.defense} name='defense' onChange={onChange} />
        {errors.defense && <span>{errors.defense}</span>}
      </div>
      <div>
        <label>Speed:</label>
        <input type="number" value={form.speed} name='speed' onChange={onChange} />
        {errors.speed && <span>{errors.speed}</span>}
      </div>
      <div>
        <label>Height in cm:</label>
        <input type="number" value={form.height} name='height' onChange={onChange} />
        {errors.height && <span>{errors.height}</span>}
      </div>
      <div>
        <label>Weight in Kg:</label>
        <input type="number" value={form.weight} name='weight' onChange={onChange} />
        {errors.weight && <span>{errors.weight}</span>}
      </div>
      <div>
        <label>Select Types:</label>
        {types.map((type, index) => (
          <div key={type.name}>
            <label>
              <input
                type="checkbox"
                value={type.name}
                checked={form.types.includes(index + 1)}
                onChange={handleCheckboxChange}
              />
              {type.name}
            </label>
          </div>
        ))}
        {errors.types && <span>{errors.types}</span>}
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
