import { MyDataBaseClassic } from "./db/my-database-classic";
import { myDatabaseClassic as myDatabaseClassicModuleA } from "./module_a";

const myDatabaseClassic = MyDataBaseClassic.instance;

myDatabaseClassic.removeUser(3);
console.log("After removing Ringo Starr:");
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicModuleA); // true
