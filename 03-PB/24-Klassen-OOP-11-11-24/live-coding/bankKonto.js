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
}

const myAccount = new BankAccount("1234454353", "John", 1000);

myAccount.deposit(1000);
console.log(myAccount.balance);
