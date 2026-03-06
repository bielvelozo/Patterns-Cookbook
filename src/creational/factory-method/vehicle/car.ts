import { Vehicle } from "./vehicle";

export class Car implements Vehicle {
  constructor(private name: string) {}
  pickUp(custumerNamer: string): void {
    console.log(`${this.name} is picking up ${custumerNamer}`);
  }
  stop(): void {
    console.log(`${this.name} is stopping`);
  }
}
