//https://learn.javascript.ru/arrow-functions-basics#perepishite-s-ispolzovaniem-funktsii-strelki
//https://plnkr.co/edit/ciGvHL5dExkSiq8A?preview

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask ("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение."));

