export default function validate(form) {
  let errors = {};

  if (!form.name) {
    errors.name = "Debes escribir un nombre a tu pokemon";
  }
  if (form.name.length > 10) {
    errors.name = "Debe contener máximo 10 caracteres";
  }
  if (form.life <= 0) {
    errors.life = "Debes asignarle un numero";
  }
  if (form.attack <= 0) {
    errors.attack = "Debes asignarle un numero";
  }
  if (form.defense <= 0) {
    errors.defense = "Debes asignarle un numero";
  }
  if (form.speed <= 0) {
    errors.speed = "Debes asignarle un numero";
  }
  if (form.life > 100) {
    errors.life = "No puede ser mayor a 100";
  }
  if (form.attack > 100) {
    errors.attack = "No puede ser mayor a 100";
  }
  if (form.defense > 100) {
    errors.defense = "No puede ser mayor a 100";
  }
  if (form.speed > 100) {
    errors.speed = "No puede ser mayor a 100";
  }
  if (form.types.length < 2) {
    errors.types = "Debe contener por lo menos 2 tipos";
  }
  if (form.types.length > 4) {
    errors.types = "Debe contener maximo 4 tipos";
  }

  return errors;
}
