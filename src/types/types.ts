import { arrayBuffer } from "stream/consumers";

type RobotType = "Cleaner" | "Waiter" | "Developer";
interface IRobot {
  name: string;
  battery: number;
  type: RobotType;
  reset: () => void;
  work: () => void;
}

class Robot implements IRobot {
  battery: number;

  constructor(
    public name: string,
    public type: RobotType,
    private message: string
  ) {
    this.battery = 100;
    this.name = this.generateName();
  }
  reset() {}
  work() {
    console.log(this.message);
  }
  generateName(): string {
    let name: string = "";
    const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 4; i++) {
      if (i < 3) {
        name += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      name += Math.floor(Math.random() * (99 - 10) + 10);
    }
    return name;
  }
}
export class Cleaner extends Robot {
  constructor(public name: string) {
    super(name, "Cleaner", "Larala larita, I clean my little house");
  }
}
export class Waiter extends Robot {
  constructor(public name: string) {
    super(name, "Cleaner", "Message I clean");
  }
}
export class Developer extends Robot {
  constructor(public name: string) {
    super(name, "Cleaner", "Message I clean");
  }
}
export default Robot;
