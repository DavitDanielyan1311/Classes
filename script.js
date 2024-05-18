class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }
  get email() {
    return this._email;
  }
  set email(val) {
    this._email = val;
  }
  get gender() {
    return this._gender;
  }
  set gender(val) {
    this._gender = val;
  }
  toString() {
    return `The author name is ${this.name}`;
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = parseInt(price);
    this.quantity = parseInt(quantity);
  }
  get title() {
    return this._title;
  }
  set title(val) {
    this._title = val;
  }
  get author() {
    return this._author;
  }
  set author(val) {
    this._author = val;
  }
  get price() {
    return this._price;
  }
  set price(val) {
    this._price = val;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(val) {
    this._quantity = val;
  }
  getProfit() {
    let profit = 0;
    profit = this._price * this._quantity;
    return profit;
  }
  toString() {
    return `This book was written by ${this.author} in 1890`;
  }
}

let book = new Book("Samvel", "Raffi", 5000, 5);
console.log(a.toString());

2;
class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val;
  }
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }
  get balance() {
    return this._balance;
  }
  set balance(val) {
    this._balance = val;
  }
  credit(amount) {
    this.balance += amount;
    return this._balance;
  }
  debit(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      return this._balance;
    } else {
      return "Amount balance exceeded";
    }
  }
  transferTo(anotherAccount, amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      anotherAccount._balance += amount;
      return this._balance;
    } else {
      return "Amount balance exceeded";
    }
  }
  static identifyAccounts(accountFirst, accountSecond) {
    return (
      accountFirst.id === accountSecond.id &&
      accountFirst.name === accountSecond.name &&
      accountFirst.balance === accountSecond.balance
    );
  }
}

let acc = new Account("212", "David", "25000");
let account1 = new Account(1, "John", 100);
let account2 = new Account(2, "Jane", 50);
console.log(account1.transferTo(account2, 40));

class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(val) {
    this._firstName = val;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(val) {
    this._lastName = val;
  }
  get gender() {
    return this._gender;
  }
  set gender(val) {
    this._gender = val;
  }
  get age() {
    return this._age;
  }
  set age(val) {
    this._age = val;
  }
  toString() {
    return `Hi I am ${this.firstName} ${this.lastName}.I am ${this.age} years old`;
  }
}

let a = new Person("David", "Danielyan", "Male", 20);

class Student extends Person {
  constructor(firstName, lastName, gender, age, program = [], year, fee) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._year = year;
    this._fee = fee;
    this._results = {};
  }

  get program() {
    return this._program;
  }

  set program(val) {
    this._program = val;
  }

  get year() {
    return this._year;
  }

  set year(val) {
    this._year = val;
  }

  get fee() {
    return this._fee;
  }

  set fee(val) {
    this._fee = val;
  }

  get results() {
    return this._results;
  }

  passExam(program, grade) {
    this._results[program] = grade;

    if (this._program.every((el) => this._results[el] >= 50)) {
      this._year += 1;
    }
  }

  toString() {
    return `Student [${super.toString()}, program=${this._program}, year=${
      this._year
    }, fee=${this._fee}]`;
  }
}

let student = new Student(
  "Jane",
  "Doe",
  "female",
  20,
  ["Math", "Science"],
  1,
  1000
);
console.log(student.toString());

student.passExam("Math", 40);
student.passExam("Science", 10);
console.log(student.toString());

class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._pay = pay;
  }
  get program() {
    return this._program;
  }
  set program(val) {
    this._program = val;
  }
  get pay() {
    return this._pay;
  }
  set pay(val) {
    this._pay = val;
  }
  toString() {
    return `Teacher ${super.toString()} program = ${this.program} pay = ${
      this.pay
    }`;
  }
}
