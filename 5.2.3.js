//https://learn.javascript.ru/number#vvod-chislovogo-znacheniya
//https://plnkr.co/edit/3VUboWEjTvmvieDN?preview
function readNumber() {
  let num = NaN
  while (!isFinite(num))
    num = prompt ("Введите число", "")
  if (num == null || num == "") return null
  return +num
}
alert(readNumber());
