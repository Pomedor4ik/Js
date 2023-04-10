function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

let numbers = [4, 10, 2, 8, 26, 5];
let average = calculateAverage(numbers);
console.log("Середнє значення масиву:", average);

let max = findMax(numbers);
console.log("Елемент з найбільшим числом:", max);

const miles = 10;
const kilometers = convertMilesToKilometers(miles);

function convertMilesToKilometers(miles) {
  const kilometers = miles * 1.60934;
  return kilometers;
}

console.log(kilometers);


















// let userInfo = {
//   name: "Fedor",
//   age: 15,
// }

// let userBackEnd = {
//   login: "fedor-pomedor",
//   passward: "codRed228",
//   email: "fedorGGpomedorWP.com",
//   confirmMail: true,
// }

// for (key in userBackEnd){
//   userInfo[key] = userBackEnd[key]
// }

// console.log(userInfo)





// Допустим нам известно: слово в зашифрованном виде 'ponyb' 
// и то что оригинальное слово начинается с 'f' 

// let str = 'ponyb'
// let originalText = []
// let text = ''

// let key = 0 

// let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm',
//  'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z']


// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
//     let symbolIndex = 0
//     alph.forEach((s,index) => {
//         if (s == str[i].toLowerCase()) {
//             symbolIndex = index
//         }
//         if (s == 'f'.toLowerCase()) {
//             symbolIndex1 = index
//         }
//         if (s == 'p'.toLowerCase()) {
//             symbolIndex2 = index
//         }
//     })
//     if (symbolIndex - key < 0) {
//         symbolIndex = symbolIndex + alph.length
//     }
   
//     key = symbolIndex2 - symbolIndex1
//     originalText.push(alph[symbolIndex-key])    
// }
// console.log(`вы добыли ключ : key = ${key}`)
// console.log(originalText)

// let parseArrToStr = (originalText) => {
//     // массив преобразуем в строку 
//     let text = ''
//     arr.forEach((symbol) => {
//         text += symbol
//     })
//     return text
    
// }
// console.log(text)
















// шифр 


// let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm',
//  'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z']

// const decode = (code, key) => {
//   for(let i = 0; i < code.length; i++) {  
//     let indexSymbol = 0
//     alph.forEach((symbol, index) => {
//       if(symbol == code[i]){
//         indexSymbol = index
//       }
//     })
//     result += alph[indexSymbol - key]
//   }
//   return result
// }






// обьект


// let user = {
//   name: 'Fedor',
//   age: 15,
//   mail: "frdor@gmail.com",
//   getName() {
//     return this.name
//   }
// }

// let backEndInfo = {
//   name: "John",
//   login: "abc",
//   password: "password123"
// }

// let statusRequest = "OK"

// let user2 = {
//   ...user,
//   ...backEndInfo,
//   name: user.name,
//   statusRequest
// }

// let prices = [123, 2442, 231, 542]

// let newPrices = [
//   -100,
//   ...prices,
//   999
// ]

// console.log("newPrices")





// массове копіювання

// let user = {
//   name: 'John',
//   age: 15,
//   order: {
//     name: "phone",
//     price: 100,
//     count: 1
//   }
// }

// let newUser = {
//   ...user,
//   order: {
//     ...user.order
//   }
// }
// console.log(newUser)






// let newOrder = {
//   name: "Computer",
//   price: 400,
//   count: 1
// }

// let user = {
//   name: 'John',
//   age: 15,
//   orders: [
    // {
    //   name: "ЕМ",
    //   price: 1000,
    //   count: 1
    // }
//   ],
//   sum: 1000
  
// }


// user = {
//   ...user,
//   orders: [
//     ...user.orders,
//     {
//       ...newOrder
//     } 
//   ],
//   sum: user.sum + newOrder.price * newOrder.count,
//   phone: "+3808880008080"
// }

// console.log(user)







// let address = {
//   country: "US",
//   city: "New York",
//   postCode: "95031"
// }

// let country = address.country
// let city = address.city
// let countryCode = address.countryCod
// =
// let {country, city, postCode} = address
// console.log(`${country} ${city} ${postCode}`)


// let orders = [

// ] 



// const user = {
//     name: 'John',
//     age: 30,
//     email: 'frdor@gmail.com',
//     orders: [
//       {
//         name: "DVD",
//         price: 1000,
//         count: 1
//       }
//     ]
//   };


  
//   const updatedUser = {
//     ...user,
//     orders: [...user.orders, order]
//   };