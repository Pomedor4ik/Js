const user1 = {
  name: "John",
  age: 18,
  orders: [
    {
      name: "Phone",
      price: 1000,
      count: 1
    },
    {
      name: "TV",
      price: 700,
      count: 1
    },
    {
      name: "Keyboard",
      price: 400,
      count: 1
    }
  ],
};

const user2 = {
  name: "Bob",
    age: 25,
    orders: [
    {
      name: "DVD",
      price: 500,
      count: 3
    },
    {
      name: "Laptop",
      price: 2000,
      count: 2
    },
    {
      name: "Fridge",
      price: 1500,
      count: 1
    }
  ],
};

const user1Copy = {
  ...user1,
  orders: [...user1.orders]
};

const user2Copy = {
  ...user2,
  orders: [...user2.orders]
};

console.log("User 1:", user1Copy);
console.log("User 2:", user2Copy);

function sum(user) {
  let total = 0;
  for (const order of user.orders) {
    total += order.price * order.count;
  }
  return total;
}





console.log("Orders sum of user 1:", sum(user1Copy),`UAH`);
console.log(`That included VAT(20%) - ${Math.floor(sum(user1Copy) / 6)} UAH`)


console.log("Orders sum of user 2:", sum(user2Copy),`UAH`);
console.log(`That included VAT(20%) - ${Math.floor(sum(user2Copy) / 6)} UAH`)
 



// let orders = [
//   {
//     name: 'Phone',
//     price:  300,
//     count: 1
//   },
//   {
//     name: 'DVD',
//     price:  200,
//     count: 1
//   }
// ]

// let users = orders.map(order => {
//   return {
//     name: 'Bob',
//     orders: order
//   }
// })

// console.log(users)



// const newOrder = {
//   name:"Computer",
//   price: 300,
//   count: 1
// };

// const user = {
//   name: "John",
//   age: 15,
//   email: "john@example.com",
//   orders: [
//     {
//       name:"DVD",
//       price: 500,
//       count: 1
//     }
//   ],
//   sum: 500
// };

// user = {
//   ...user,
//   orders: [
//     ...user.orders, 
//     {
//       ...newOrder
//     }  
//   ],
//   sum: user.sum + newOrder.price * newOrder.count,
// }


// console.log(user);








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