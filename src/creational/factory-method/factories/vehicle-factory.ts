import { Vehicle } from "../vehicle/vehicle";

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUp(custumerNamer: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(custumerNamer);
    return car;
  }
}
