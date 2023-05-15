import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../redux/actions";
import validate from "./validate";

export default function Form() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    life: "",
    types: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    life: "",
    types: [],
  });

  const onChangeName = (event) => {
    setForm({ ...form, name: event.target.value });
    setErrors(validate({ ...form, name: event.target.value }));
  };

  const onChange = (event) => {
    setForm({ ...form, life: parseInt(event.target.value) });
    setErrors(validate({ ...form, life: parseInt(event.target.value) }));
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
      console.log(form);
      setForm({
        name: "",
        life: "",
        types: [],
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={form.name} onChange={onChangeName} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Life:</label>
        <input type="number" value={form.life} onChange={onChange} />
        {errors.life && <span>{errors.life}</span>}
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
