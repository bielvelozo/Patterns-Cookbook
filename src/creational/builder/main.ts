import { MainDishBuilder } from "./classes/main-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage().makeDessert();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeMeal().makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new MainDishBuilder();
veganDishBuilder.makeMeal().makeBeverage().makeDessert();

console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
