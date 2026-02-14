export abstract class Animal {
  private name: string = "";

  // encapsulation
  setName(name: string): void {
    if (!name) throw new Error("Name is required");
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  abstract makeSound(): string;
}
