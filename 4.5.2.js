//https://learn.javascript.ru/constructor-new#sozdanie-kalkulyatora-pri-pomoschi-konstruktora
//https://plnkr.co/edit/URMNbOffzp9esfCI?preview

function Calculator() {
  this.read = function() {
    this.a = +prompt ("Введите первое число", "")
    this.b = +prompt ("Введите второе число", "")
  }, 
  this.sum = function() {
    return this.a + this.b
  },
  this.mul = function() {
    return this.a*this.b
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
