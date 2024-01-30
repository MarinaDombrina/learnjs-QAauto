//https://learn.javascript.ru/function-basics#perepishite-funktsiyu-ispolzuya-operator-ili
//https://plnkr.co/edit/ZFcRHXGuR4Ax3sKA?preview

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

