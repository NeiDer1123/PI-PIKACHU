import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../redux/actions";

export default function Form() {

  const dispatch = useDispatch()
  const types = useSelector(state=>state.types)
  
  useEffect(()=>{
    dispatch(getTypes())
  },[dispatch])
  
  const [form, setForm] = useState({
    name: "",
    life: "",
    types: [],
  });

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      const typeIndex = types.findIndex((type) => type.name === value);
      setForm((prevForm) => ({
        ...prevForm,
        types: [...prevForm.types, typeIndex + 1],
      }));
    } else {
      const typeIndex = types.findIndex((type) => type.name === value);
      setForm((prevForm) => ({
        ...prevForm,
        types: prevForm.types.filter((type) => type !== typeIndex + 1),
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div>
        <label>Life:</label>
        <input
          type="number"
          value={form.life}
          onChange={(e) => setForm({ ...form, life: parseInt(e.target.value) })}
        />
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
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

