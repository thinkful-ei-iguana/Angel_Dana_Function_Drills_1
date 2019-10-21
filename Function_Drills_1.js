// eslint-disable-next-line strict
function createGreeting (name, age){
  const yearOfBirth = new Date().getFullYear() - age;
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting('Angel', 23);
console.log(greeting1);
