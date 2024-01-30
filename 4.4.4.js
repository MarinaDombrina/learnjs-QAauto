//https://learn.javascript.ru/object-methods#sozdayte-kalkulyator
//https://plnkr.co/edit/A6PalQ4101BC58Ad?preview

let calculator = { 
  read() {
  this.a = +prompt ("Введите первое число", "")
  this.b = +prompt ("Введите второе число", "")
  },
  sum() {
    return this.a+this.b 
    },
    mul() {
      return this.a*this.b
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() )
