// eslint-disable-next-line strict
function createGreeting (name, age){
  const yearOfBirth = Date.now().getFullYear() - age;
  return `Hi, my name is ${name} and I am ${age} years old.`;
}

const greeting1 = createGreeting('Angel', 23);
console.log(greeting1);
