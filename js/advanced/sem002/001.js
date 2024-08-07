class BankAccount {
 #balance = 0;

 get balance() {
    return this.#balance;
 }

 deposit (amount) {
    if (amount < 0) throw new Error ('Отрицательное число');
    this.#balance += amount;
 }

 withdraw (amount) {
    if (this.#balance - amount < 0) throw new Error ('Недостаточно средств на балансе')
        this.#balance -= amount;
 }

 constructor (startAmount) {
    if (startAmount < 0) throw new Error ('Отрицательное число');
    this.#balance = startAmount;
 }

}

let account = new BankAccount(1000);
console.log(account.balance);

account.deposit(200);
console.log(account.balance);

account.withdraw(1000);
console.log(account.balance);