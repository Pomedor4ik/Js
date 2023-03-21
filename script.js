let currentYear = new Date().getFullYear()
let birthYear = prompt("У якому році ви народились?")
if (isNaN(birthYear)) {
    alert("Введіть будь ласка ціле числове значення")
    let birthYear = prompt("Уважно! У якому році ви народились?")
    let age = currentYear - birthYear
    alert(`Вам ${age} років!`)
    if (age > 100 ) {
        alert(`І Ви брехло !`)
    }
    
}
else {
      let age = currentYear - birthYear
      alert(`Вам ${age} років!`)
      if (age > 100 ) {
          alert(`І Ви брехло !`)
      }
    }
let age = currentYear - birthYear

let answer = prompt(`Вам зараз ${age} років так чи ні ?`)
if (answer.toLowerCase() == "так") {
  alert("Вірно!")
} else {
  alert("Неправильно!")
}

