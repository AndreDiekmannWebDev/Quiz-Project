// Iban, Inhaber, Balance

class BankAccount {
  #iban;
  #inhaber;
  #balance;
  constructor(iban, inhaber, balance) {
    this.#iban = iban;
    this.#inhaber = inhaber;
    this.#balance = balance;
  }
  get iban() {
    return this.#iban;
  }
  get inhaber() {
    return this.#inhaber;
  }
  get balance() {
    return this.#balance;
  }
  set balance(newbBalance) {
    this.#balance = newbBalance;
  }
  deposit(balance) {
    this.#balance += balance;
  }

  // Method geld abheben mit Validierung

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Nicht genüg Geld!");
    } else {
      this.#balance -= amount;
      console.log(`Your new balance is ${this.#balance}`);
    }
  }

  // Method komplett Account info zu bekommen

  displayAcoountInfo() {
    console.log(`Account number : ${this.#iban}
        Account holder : ${this.#inhaber}
        Balance: ${this.#balance}`);
  }
}

const myAccount = new BankAccount("1234454353", "John", 1000);

myAccount.deposit(1000);
console.log(myAccount.balance);
myAccount.withdraw(1900);

myAccount.displayAcoountInfo();
