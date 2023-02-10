// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
let salary = "";
function calculateSalary(role) {
  switch(role){
    case "ceo":
      value=2200
    break;
    case "manager":
      value=1800
    break;
    case "cto":
      value=1800
      break;
    case "developer":
      value=1500
      break;
    default:
      value=1000
  }
  return value
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);