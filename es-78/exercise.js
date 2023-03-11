const isLogged = true;
function loggedCheck(data){
 return new Promise((resolve, reject) => {
    if(data){
        resolve(Math.random());
    } else{
        reject(new Error("Not logged in"))
    }
})
}
function getData(number){
    console.log(number)
return new Promise((resolve, reject) => {
    if (number > 0.5){
        resolve({name: "John", age: 24})
    } else {
        reject(new Error("User not found"))
    }
})
}

loggedCheck(isLogged)
.then(getData)
.then((val) => console.log(val))
.catch((err) => console.log(err))
.finally(() => console.log("Complete"));

