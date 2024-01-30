//https://learn.javascript.ru/object#proverka-na-pustotu
//https://plnkr.co/edit/QCRMV3SxtdetdI4D?preview
function isEmpty(obj) {
    for (let key in obj) {
      if (key) return false;
  }
  return true;
}

