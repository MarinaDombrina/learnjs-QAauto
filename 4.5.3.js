//https://plnkr.co/edit/if52C2wZuGozXNzI


function Accumulator(startingValue) {

  this.value = startingValue;
  this.read = function() {
    this.value += Number(prompt("Введите число"));
  };
  return this.value
}
 
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
