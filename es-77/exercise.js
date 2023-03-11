const isLogged = true;
let rand = Math.random()

const loggedCheck = new Promise((resolve, reject) => {
    if(isLogged){
        resolve(rand)
    } else{
        reject(new Error("Not logged in"))
    }
})

const getData = new Promise((resolve, reject) => {
    if (rand > 0.5){
        resolve(`{name: "John", age: 24}`)
    } else {
        reject(new Error("User not found"))
    }
})

getData
.then(console.log(loggedCheck))
.then((val) => console.log(val))
.catch((err) => console.log(err))