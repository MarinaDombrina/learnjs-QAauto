//https://learn.javascript.ru/array-methods#perevedite-tekst-vida-border-left-width-v-borderleftwidth
//https://plnkr.co/edit/4EqAE1ieiDbr43ym?preview

function camelize(str) {
  let flag = true;
  if (str[0] == "-") { 
    flag = false;
    str = str.substr(1);
  }
  let array = str.split("-");
  let newArray = [];
  for (let key of array) {
    newArray.push( key[0].toUpperCase() + key.slice(1))
  }
  let newStr = newArray.join("");
  if (flag == true) newStr = newStr[0].toLowerCase() + newStr.slice(1);
  return newStr;
}

alert (camelize("background-color"));
alert (camelize("list-style-image"));
alert (camelize("-webkit-transition"));
