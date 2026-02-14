import { Animal } from "./animal";
import { Cat } from "./cat";
import { Dog } from "./dog";

const lia = new Dog();

//inheritence
lia.setName("Lia");
console.log(lia.getName());

//polymorphism and abstraction
const lily = new Cat();
playWIthAnimal(lia);
playWIthAnimal(lily);

function playWIthAnimal(animal: Animal) {
  console.log(animal.makeSound());
}
