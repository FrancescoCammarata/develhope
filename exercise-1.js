const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName="Simon"

// person1 is also modified because person2 is directly attached to person1 because of the "=" operator.

console.log(person1);
console.log(person2);
