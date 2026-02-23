import { User } from "../interfaces/users";
const users: User[] = [];

export const myDatabaseModule = {
  addUser(user: User): void {
    users.push(user);
  },
  removeUser(index: number): void {
    users.splice(index, 1);
  },
  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
