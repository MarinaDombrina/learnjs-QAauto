//https://learn.javascript.ru/string#sdelat-pervyy-simvol-zaglavnym
//https://plnkr.co/edit/9R4ixTGu3LJTbRBn?preview

function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

alert ( ucFirst("") );
alert( ucFirst("hdhhdhdhh") );
