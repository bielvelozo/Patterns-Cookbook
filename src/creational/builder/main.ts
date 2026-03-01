import { FoodBox } from "./classes/food-box";
import { Sunomono, Sushi, Temaki } from "./classes/foods";

const sonomono = new Sunomono("Sonomono", 24);
const sushi = new Sushi("Sushi", 32);
const temaki = new Temaki("Temaki", 28);

const foodBox = new FoodBox();
foodBox.add(sonomono, sushi, temaki);

console.log(foodBox);
