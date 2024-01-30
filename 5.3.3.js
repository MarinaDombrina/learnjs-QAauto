//https://plnkr.co/edit/3z08vV1a4x25dpDe

function truncate(str, maxlength) {
  if (str.length > maxlength) str = str.substr(0,maxlength) + "...";
  return str;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

alert(truncate("Всем привет!", 2))
