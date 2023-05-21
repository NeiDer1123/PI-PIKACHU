import styleColor from './ColorsTypes.module.css'
import styleDiv from './ColorsDiv.module.css'

function changeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

function backgorundButtons(type) {
    switch (type) {
      case "normal":
        return styleColor.normal;
      case "fighting":
        return styleColor.fighting;
      case "flying":
        return styleColor.flying;
      case "poison":
        return styleColor.poison;
      case "ground":
        return styleColor.ground;
      case "rock":
        return styleColor.rock;
      case "bug":
        return styleColor.bug;
      case "ghost":
        return styleColor.ghost;
      case "steel":
        return styleColor.steel;
      case "fire":
        return styleColor.fire;
      case "water":
        return styleColor.water;
      case "grass":
        return styleColor.grass;
      case "electric":
        return styleColor.electric;
      case "psychic":
        return styleColor.psychic;
      case "ice":
        return styleColor.ice;
      case "dragon":
        return styleColor.dragon;
      case "dark":
        return styleColor.dark;
      case "fairy":
        return styleColor.fairy;
      case "unknown":
        return styleColor.unknown;
      case "shadow":
        return styleColor.shadow;
      default:
        return "";
    }
  }

  function backgorundDiv(type) {
    switch (type) {
      case "normal":
        return styleDiv.normal;
      case "fighting":
        return styleDiv.fighting;
      case "flying":
        return styleDiv.flying;
      case "poison":
        return styleDiv.poison;
      case "ground":
        return styleDiv.ground;
      case "rock":
        return styleDiv.rock;
      case "bug":
        return styleDiv.bug;
      case "ghost":
        return styleDiv.ghost;
      case "steel":
        return styleDiv.steel;
      case "fire":
        return styleDiv.fire;
      case "water":
        return styleDiv.water;
      case "grass":
        return styleDiv.grass;
      case "electric":
        return styleDiv.electric;
      case "psychic":
        return styleDiv.psychic;
      case "ice":
        return styleDiv.ice;
      case "dragon":
        return styleDiv.dragon;
      case "dark":
        return styleDiv.dark;
      case "fairy":
        return styleDiv.fairy;
      case "unknown":
        return styleDiv.unknown;
      case "shadow":
        return styleDiv.shadow;
      default:
        return "";
    }
  }

  export {
    backgorundButtons,
    changeString,
    backgorundDiv
  }