import { User } from "../interfaces/users";

export class MyDataBaseClassic {
  private static _instance: MyDataBaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDataBaseClassic {
    if (MyDataBaseClassic._instance === null) {
      MyDataBaseClassic._instance = new MyDataBaseClassic();
    }

    return MyDataBaseClassic._instance;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
