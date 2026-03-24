const orders = [
  {
    id: 1,
    customer: "Jhon",
    items: [
      { name: "Ноутбук", price: 50000, quantity: 1 },
      { name: "Мышь", price: 1500, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: "Alan",
    items: [
      { name: "Телефон", price: 30000, quantity: 1 },
      { name: "Чехол", price: 1000, quantity: 3 }
    ]
  },
  {
    id: 3,
    customer: "Jane",
    items: [
      { name: "Клавиатура", price: 2500, quantity: 1 },
      { name: "Монитор", price: 12000, quantity: 1 }
    ]
  }
];

var totalIncome = 0;
var maxOrder = 0;
var topCustomer = "";

var products = {};

for (var i = 0; i < orders.length; i++) {
  var order = orders[i];
  var orderSum = 0;

  for (var j = 0; j < order.items.length; j++) {
    var item = order.items[j];

    orderSum += item.price * item.quantity;

    if (products[item.name]) {
      products[item.name] += item.quantity;
    } else {
      products[item.name] = item.quantity;
    }
  }

  console.log("Заказ #" + order.id + " сумма: " + orderSum);

  totalIncome += orderSum;

  if (orderSum > maxOrder) {
    maxOrder = orderSum;
    topCustomer = order.customer;
  }
}

console.log("Общий доход: " + totalIncome);
console.log("Самый дорогой заказ сделал: " + topCustomer);

console.log("Все товары:");
for (var productName in products) {
  console.log(productName + ": " + products[productName]);
}

var maxProduct = "";
var maxCount = 0;

for (var productName2 in products) {
  if (products[productName2] > maxCount) {
    maxCount = products[productName2];
    maxProduct = productName2;
  }
}

console.log("Самый популярный товар: " + maxProduct + " (" + maxCount + ")");