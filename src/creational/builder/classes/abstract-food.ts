import { FoodCompositeProtocol } from "../interfaces/food-composite-protocol";

export abstract class AbstractFood implements FoodCompositeProtocol {
  constructor(
    private name: string,
    private price: number
  ) {}

  getPrice(): number {
    return this.price;
  }
}
