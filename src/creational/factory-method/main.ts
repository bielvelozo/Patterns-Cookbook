import { randomNumbers } from "./utils/random-numbers";
import { CarFactory } from "./factories/car-factory";
import { BicycleFactory } from "./factories/bicycle-factory";
import { randomVehicleAlgorithm } from "./main/random-car-algorithm";

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();
const customerNames = ["Ana", "Joana", "Helena", "João"];
const carNames = ["Fusca", "Celta Preto"];
const bicycleNames = ["Caloi", "Monark"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm(carFactory, carNames);
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();

  const randomBike = randomVehicleAlgorithm(bicycleFactory, bicycleNames);
  randomBike.pickUp(name);
  randomBike.stop();

  console.log("---");
}
