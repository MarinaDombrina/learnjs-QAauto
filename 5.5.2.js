// https://plnkr.co/edit/Vyv8XrXpbalUjBpR?preview

const filterRange = (arr, a, b) => arr.filter(item => (item >= a && item <=b));

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
