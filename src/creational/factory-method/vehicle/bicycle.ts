import { Vehicle } from "./vehicle";

export default class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(custumerNamer: string): void {
    console.log(`${this.name} is riding up ${custumerNamer}`);
  }

  stop(): void {
    console.log(`${this.name} is breaking`);
  }

  cycle(): void {
    console.log(`${this.name} is cycling`);
  }
}
