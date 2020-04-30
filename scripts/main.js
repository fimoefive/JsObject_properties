/* 
Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'

Console log "Jeff was hired on 09/22/2010" using bracket notation.

Add a new key, vacation_days, and its value, 20, to employee. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.

let eom = "employee_of_the_month";
Use the variable above to add a new property to employee. Set its value to false. Should you use dot or bracket notation?
*/

let eom = "employee_of_the_month";

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
    vacation_days: 20,
    
  };

console.log(employee);
employee[eom] = false;

console.log(employee);
console.log(`"Our company's lawyer is ${employee.name}."`);
console.log(`${employee.name} was hired on ${employee.hire_date}.`);

/* 
for (let foo in employee){
    console.log(employee[foo]);
}
 */