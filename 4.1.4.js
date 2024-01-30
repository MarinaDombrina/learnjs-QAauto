//https://learn.javascript.ru/object#summa-svoystv-obekta
//https://plnkr.co/edit/EPTNtZDAmCl2QVvC?preview
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
