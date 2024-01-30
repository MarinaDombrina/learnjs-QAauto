//https://learn.javascript.ru/string#proverka-na-spam
//https://plnkr.co/edit/esamcR027o8h3FRQ?preview

function checkSpam(str) {
  return (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx"));
}

alert ( checkSpam('buy ViAgRA now') ); 
alert ( checkSpam('free xxxxx') );
alert ( checkSpam("innocent rabbit") );

