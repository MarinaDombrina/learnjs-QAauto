//https://plnkr.co/edit/cPe8YE9KBjN3ycGq?preview

const copySorted = (arr) => arr.slice().sort();

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)



