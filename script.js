// let currentYear = new Date().getFullYear()
// let birthYear = prompt("У якому році ви народились?")
// let age = currentYear - birthYear

// if (isNaN(birthYear)) {
//     alert("Введіть будь ласка ціле числове значення")
//     let birthYear = prompt("Уважно! У якому році ви народились?")
//     alert(`Вам ${age} років!`)
//     if (age > 100 ) {
//         alert(`І Ви брехло !`)
//     }
    
// }
// else {
//       alert(`Вам ${age} років!`)
//       if (age > 100 ) {
//           alert(`І Ви брехло !`)
//       }
//     }

// let answer = prompt(`Вам зараз ${age} років так чи ні ?`)
// if (answer.toLowerCase() == "так") {
//   alert("Вірно!")
// } else {
//   alert("Неправильно!")
// }

let quantity = prompt("Введіть кількість чисел:")
let i = 1
let output = ""

switch (true) {
  case isNaN(quantity):
    alert("Введіть будь ласка ціле числове значення")
    break;
  case quantity <= 0:
    alert("Кількість має бути більше 0")
    break;
  default:
    while (quantity > 0) {
      if (i % 2 !== 0) {
        output += i + " "
        quantity--
      }
      i++
    }
    alert("Непарні числа: " + output)
    break;
}

//quantity = количество