//https://learn.javascript.ru/array#summa-vvedyonnyh-chisel
//https://plnkr.co/edit/TkJ3hQMECrpS8uwS?preview

function sumInput() {
  let array = [];
  let sum = 0;
  while (true) {
    let a = prompt ("Введите значение", "");
    if (!isNaN(a) && a!=null && a!="") {
      array.push(+a);
      sum += +a;
    }
    else return sum;
  }
}

alert (sumInput());
