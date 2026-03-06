import { randomNumbers } from "../utils/random-numbers";
import { VehicleFactory } from "../factories/vehicle-factory";
import { Vehicle } from "../vehicle/vehicle";

export function randomVehicleAlgorithm(factory: VehicleFactory, vehicleNames: string[]): Vehicle {
  const vehicles = vehicleNames.map((name) => factory.getVehicle(name));
  return vehicles[randomNumbers(vehicles.length)];
}
