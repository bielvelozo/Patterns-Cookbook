import { User } from "../interfaces/users";

export const myDatabaseFunction = (function () {
  const users: User[] = [];

  return {
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
})();
