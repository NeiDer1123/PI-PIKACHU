import { useState } from "react";

export default function Form() {
  const types = [
    {
      name: "normal",
    },
    {
      name: "fighting",
    },
    {
      name: "flying",
    },
    {
      name: "poison",
    },
    {
      name: "ground",
    },
    {
      name: "rock",
    },
    {
      name: "bug",
    },
    {
      name: "ghost",
    },
    {
      name: "steel",
    },
    {
      name: "fire",
    },
    {
      name: "water",
    },
    {
      name: "grass",
    },
    {
      name: "electric",
    },
    {
      name: "psychic",
    },
    {
      name: "ice",
    },
    {
      name: "dragon",
    },
    {
      name: "dark",
    },
    {
      name: "fairy",
    },
    {
      name: "unknown",
    },
    {
      name: "shadow",
    },
  ];

  const [form, setForm] = useState({
    name: "",
    life: "",
    types: [],
  });

  const handleCheckboxChange = (event) => {
    const { value, checked} = event.target;
    // console.log(event.target);
    if (checked) {
      const typeIndex = types.findIndex((type) => type.name === value);
      setForm((prevForm) => ({
        ...prevForm,
        types: [...prevForm.types, typeIndex],
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        types: prevForm.types.filter((type) => type !== value),
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
                checked={form.types.includes(index)}
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



// POR NOMBRE

// import { useState } from "react";

// export default function Form() {
//   const types = [
//     {
//       name: "normal",
//     },
//     {
//       name: "fighting",
//     },
//     {
//       name: "flying",
//     },
//     // ...resto de opciones
//   ];

//   const [form, setForm] = useState({
//     name: "",
//     life: "",
//     type: [],
//   });

//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setForm((prevForm) => ({
//         ...prevForm,
//         type: [...prevForm.type, value],
//       }));
//     } else {
//       setForm((prevForm) => ({
//         ...prevForm,
//         type: prevForm.type.filter((type) => type !== value),
//       }));
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(form);
//     // Aquí puedes realizar acciones adicionales con el formulario enviado
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
//       </div>
//       <div>
//         <label>Life:</label>
//         <input type="number" value={form.life} onChange={(event) => setForm({ ...form, life: event.target.value })} />
//       </div>
//       <div>
//         <label>Select Types:</label>
//         {types.map((type) => (
//           <div key={type.name}>
//             <label>
//               <input
//                 type="checkbox"
//                 value={type.name}
//                 checked={form.type.includes(type.name)}
//                 onChange={handleCheckboxChange}
//               />
//               {type.name}
//             </label>
//           </div>
//         ))}
//       </div>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }
