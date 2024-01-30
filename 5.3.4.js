//https://plnkr.co/edit/iSl7IKZrNdyerOOv?preview

function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert( extractCurrencyValue('$7474'));
