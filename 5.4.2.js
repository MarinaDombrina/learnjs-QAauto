//https://learn.javascript.ru/array#operatsii-s-massivami
//https://plnkr.co/edit/vSZENLEQ1RMg7qI7?preview
let styles = ["Джаз", "Блюз"];
styles.push ("Рок-н-ролл");
styles[Math.floor((styles.length-1)/2)] = "Классика";
alert ( styles.shift () );
styles.unshift ("Рэп", "Регги");
