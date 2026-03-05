import { foodBuilderProtocol } from "../interfaces/food-builder-protocol";
import { FoodBox } from "./food-box";
import { Beverage, Dessert, Sunomono, Sushi, Temaki } from "./foods";

export class VeganDishBuilder implements foodBuilderProtocol {
  private _food: FoodBox = new FoodBox();

  reset(): this {
    this._food = new FoodBox();

    return this;
  }

  makeMeal(): this {
    const sonomono = new Sunomono("Sonomono", 24);
    const temaki = new Temaki("Vegan Temaki", 28);

    this._food.add(sonomono, temaki);

    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage("Sake", 15);

    this._food.add(beverage);

    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert("Mochi", 10);

    this._food.add(dessert);

    return this;
  }

  getMeal(): FoodBox {
    return this._food;
  }

  getPrice(): number {
    return this._food.getPrice();
  }
}
