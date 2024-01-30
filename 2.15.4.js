//https://learn.javascript.ru/function-basics#funktsiya-pow-x-n
//https://plnkr.co/edit/wvaqgyWg4VkupNyh?preview
function pow (x,n) {
  let res = 1;
  while (n > 0) {
    res *= x;
    n--;
  }
  return res;
}


