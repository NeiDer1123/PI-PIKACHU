export default function validate(form) {
  let errors = {};

  if (!form.name) {
    errors.name = "Debes escribir un nombre a tu pokemon";
  }
  if (form.name.length > 10) {
    errors.name = "Debe contener máximo 10 caracteres";
  }
  if (form.life <= 0) {
    errors.life = "Debes asignarle un numero de Vida";
  }
  if (form.attack <= 0) {
    errors.attack = "Debes asignarle un numero de Ataque";
  }
  if (form.defense <= 0) {
    errors.defense = "Debes asignarle un numero de Defensa";
  }
  if (form.speed <= 0) {
    errors.speed = "Debes asignarle un numero de Velocidad";
  }
  if (form.life > 200) {
    errors.life = "La vida no puede ser mayor a 200";
  }
  if (form.attack > 200) {
    errors.attack = "El ataque no puede ser mayor a 200";
  }
  if (form.defense > 200) {
    errors.defense = "La defensa no puede ser mayor a 200";
  }
  if (form.speed > 200) {
    errors.speed = "La velocidad no puede ser mayor a 200";
  }
  if (form.types.length < 2) {
    errors.types = "Debe contener por lo menos 2 tipos";
  }
  if (form.types.length > 3) {
    errors.types = "Debe contener maximo 3 tipos";
  }
  if (form.image.length > 255){
    errors.image = "La URL supera el limite de caracteres"
  }
  if (form.image.length === 0){
    errors.image = "Debes agregar una imagen"
  }
  if (!form.image.endsWith(".png") && !form.image.endsWith(".gif") && !form.image.endsWith(".jpg") ){
    errors.image = "Debe ser formato imagen en PNG, GIT, o JPG"
  }

  return errors;
}
