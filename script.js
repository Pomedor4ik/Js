// const miles = 10;
// const kilometers = convertMilesToKilometers(miles);

// function convertMilesToKilometers(miles) {
//   const kilometers = miles * 1.60934;
//   return kilometers;
// }

// console.log(kilometers);





//===================================================





// function calculateAverage(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum / numbers.length;
// }

// function findMax(numbers) {
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }

// let numbers = [4, 10, 2, 8, 26, 5];
// let average = calculateAverage(numbers);
// console.log("Середнє значення масиву:", average);

// let max = findMax(numbers);
// console.log("Елемент з найбільшим числом:", max);





//===================================================





// function getQuantity() {
//   let quantity = prompt("Введіть кількість чисел:")
//   if (isNaN(quantity) || quantity <= 0) {
//     alert("Введіть будь ласка ціле числове значення більше 0")
//     return null;
//   }
//   return quantity;
// }

// function getOddNumbers(quantity) {
//   let i = 1;
//   let output = "";
//   while (quantity > 0) {
//     if (i % 2 !== 0) {
//       output += i + " "
//       quantity--;
//     }
//     i++;
//   }
//   return output;
// }

// function main() {
//   const quantity = getQuantity();
//   if (quantity !== null) {
//     const oddNumbers = getOddNumbers(quantity);
//     alert("Непарні числа: " + oddNumbers);
//   }
// }

// main();






//=======================================







// function getBirthYear() {
//   let birthYear = prompt("У якому році ви народились?");
//   while (isNaN(birthYear)) {
//     alert("Введіть будь ласка ціле числове значення");
//     birthYear = prompt("Уважно! У якому році ви народились?");
//   }
//   return parseInt(birthYear);
// }

// function calculateAge(birthYear) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - birthYear;
//   return age;
// }

// function checkAge(age) {
//   const answer = prompt(`Вам зараз ${age} років так чи ні ?`);
//   if (answer.toLowerCase() == "так") {
//     alert("Вірно!");
//   } else {
//     alert("Неправильно!");
//   }
// }

// function main() {
//   const birthYear = getBirthYear();
//   const age = calculateAge(birthYear);
//   alert(`Вам ${age} років!`);
//   if (age > 100) {
//     alert("І Ви брехло !");
//   }
//   checkAge(age);
// }

// main();


















const getTotalPrice = (user) => {
  let totalPrice = 0
  for (let i = 0; i < user.orders.length; i++){
      totalPrice += user.orders[i].price * user.orders[i].count
  }
  return totalPrice
}
const getPiceForAllUsers = (usersArr) => { 
  for (let i = 0; i < usersArr.length; i++){
      console.log(`Total price in user ${usersArr[i].name}: ${getTotalPrice(usersArr[i])} грн.`)
  }
}

let usersArr = [
  { 
  name: "Alex",
  age: 30,
  confirmEmail: false,
  description: null,
  orders: [
          {
              name: "TV",
              count: 2,
              price: 4000 
          },
          {
              name: "PC",
              count: 1,
              price: 6000
          },
          {
              name: "Phone",
              count: 3,
              price: 8000
          },
          {
              name: "Delivery", 
              count: 1,
              price: 300
          }
      ]
  }, 
  {
      name: "John",
      age: 27,
      confirmEmail: true,
      description: null,
      orders: [
          {
              name: "Phone",
              count: 4,
              price: 4000
          },
          {
              name: "Delivery",
              count: 1,
              price: 300
          }
      ]
  },
  {
      name: "Bob",
      age: 17,
      confirmEmail: true,
      description: null,
      orders: []
  }
]

getPiceForAllUsers(usersArr)

function FindMostExpensiveOrder(usersArr) {
  for (let i = 0; i < usersArr.length; i++){
    let user = usersArr[i];
    let mostExpensiveOrder = null;
    let highestPrice = 0;
    for (let j = 0; j < user.orders.length; j++){
      let order = user.orders[j];
      if (order.price > highestPrice){
        mostExpensiveOrder = order;
        highestPrice = order.price;
      }
    }
    if (mostExpensiveOrder != null) {
      console.log(`User ${user.name} has the most expensive order: ${mostExpensiveOrder.name} за цiною - ${highestPrice} UAH`);
    } else{
      console.log(`User ${user.name} does not have any orders`);
  }
  }
}

FindMostExpensiveOrder(usersArr)