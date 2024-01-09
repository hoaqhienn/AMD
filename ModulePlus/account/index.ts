import { Account } from "./Account";

class Main {
  public static main() {
    const acc1 = new Account(72354, "Ted Murphy", 102.56);
    const acc2 = new Account(69713, "Jane Smith", 40);
    const acc3 = new Account(93757, "Edward Demsey", 759.32);

    acc1.deposit(25.85);
    acc2.deposit(500);

    acc2.withdraw(430.75, 1.5);

    acc3.addInterest();

    console.log(acc1.toString());
    console.log(acc2.toString());
    console.log(acc3.toString());

    acc1.transfer(acc2, 100);

    console.log(acc1.toString());
    console.log(acc2.toString());
  }
}

Main.main();
