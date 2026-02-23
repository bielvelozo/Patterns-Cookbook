import { MyDataBaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDataBaseClassic.instance;
myDatabaseClassic.addUser({ name: "John Lennon", age: 40 });
myDatabaseClassic.addUser({ name: "Paul McCartney", age: 83 });
myDatabaseClassic.addUser({ name: "George Harrison", age: 58 });
myDatabaseClassic.addUser({ name: "Ringo Starr", age: 85 });
myDatabaseClassic.show();

export { myDatabaseClassic };
