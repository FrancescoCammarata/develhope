const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
Object.keys(person).forEach(i =>{
console.log(`${i}:${person[i]}`)
})
// Print values of person using Object.keys