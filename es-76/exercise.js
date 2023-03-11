const number = 15;

let numberPromise = new Promise((resolve,reject) => {
    if(number>10){
        resolve("Your number is greater than 10")
    } else {
        reject("Your number is lower than 10")
    }
})

numberPromise
.then((val) => console.log(val))
.catch((err) => console.error(err))