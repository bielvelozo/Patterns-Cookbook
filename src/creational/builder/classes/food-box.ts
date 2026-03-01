import { FoodCompositeProtocol } from "../interfaces/food-composite-protocol";

export class FoodBox implements FoodCompositeProtocol {
  private readonly _children: FoodCompositeProtocol[] = [];
  getPrice(): number {
    return this._children.reduce((sum, food) => sum + food.getPrice(), 0);
  }

  add(...foods: FoodCompositeProtocol[]): void {
    foods.forEach((food) => this._children.push(food));
  }
}
