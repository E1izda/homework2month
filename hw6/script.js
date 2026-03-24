var str = "Hello";
var num = 10;
var empty;

console.log(empty);
console.log(num > 20);
console.log(num < 20);
console.log("abc" / 2);
console.log(typeof num);
console.log(typeof str);

var price = Number(prompt("Введите сумму покупки:"));

if (isNaN(price)) {
    console.log("Ошибка: введи число нормально");
} else {
    var discount = 0;

    if (price >= 100) discount = 5;
    if (price >= 500) discount = 10;
    if (price >= 1000) discount = 15;

    var finalPrice = (price - price * discount / 100).toFixed(2);

    console.log("Сумма покупки: " + price + "$");
    console.log("Скидка: " + discount + "%");
    console.log("Сумма со скидкой: " + finalPrice + "$");
}