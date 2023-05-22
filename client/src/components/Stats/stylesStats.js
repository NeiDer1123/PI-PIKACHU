import styleStat from './StyleStats.module.css'

export function styleStats(stat) {
  switch (stat) {
    case "attack":
      return styleStat.attack;
    case "defense":
      return styleStat.defense;
    case "life":
      return styleStat.life;
    case "speed":
      return styleStat.speed;

    default:
      return "";
  }
}
