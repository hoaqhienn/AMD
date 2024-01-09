/**
 * Represents a bank account.
 */
export class Account {
    private static RATE = 0.035;

    private accountNumber: number;
    private name: string;
    private balance: number;

    /**
     * Creates a new instance of the Account class.
     * @param accNumber - The account number. Default is 999999.
     * @param name - The account holder's name. Default is "Chưa xác định".
     * @param balance - The initial balance. Default is 50000.
     */
    constructor(
        accNumber = 999999,
        name = "Chưa xác định",
        balance = 50000
    ) {
        this.accountNumber = accNumber;
        this.name = name;
        this.balance = balance;
    }

    /**
     * Gets the account number.
     * @returns The account number.
     */
    getAccountNumber(): number {
        return this.accountNumber;
    }

    /**
     * Gets the account balance.
     * @returns The account balance.
     */
    getBalance(): number {
        return this.balance;
    }

    /**
     * Deposits the specified amount into the account.
     * @param amount - The amount to deposit.
     * @returns True if the deposit was successful, false otherwise.
     */
    deposit(amount: number): boolean {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }

    /**
     * Withdraws the specified amount from the account.
     * @param amount - The amount to withdraw.
     * @param fee - The withdrawal fee.
     * @returns True if the withdrawal was successful, false otherwise.
     */
    withdraw(amount: number, fee: number): boolean {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance -= amount + fee;
            return true;
        }
        return false;
    }

    /**
     * Adds interest to the account balance.
     */
    addInterest(): void {
        this.balance += this.balance * Account.RATE;
    }

    /**
     * Transfers the specified amount from this account to another account.
     * @param acc2 - The destination account.
     * @param amount - The amount to transfer.
     * @returns True if the transfer was successful, false otherwise.
     */
    transfer(acc2: Account, amount: number): boolean {
        if (this.withdraw(amount, 0)) {
            acc2.deposit(amount);
            return true;
        }
        return false;
    }

    /**
     * Returns a string representation of the account.
     * @returns The string representation of the account.
     */
    toString(): string {
        const formatter = new Intl.NumberFormat("vi", {
            style: "currency",
            currency: "VND",
        });

        return `Số tài khoản: ${this.accountNumber}\nTên chủ tài khoản: ${this.name}\nSố dư: ${formatter.format(
            this.balance
        )}\n---------------------`;
    }
}
