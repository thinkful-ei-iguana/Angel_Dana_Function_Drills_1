// eslint-disable-next-line strict
function getYearOfBirth(age){
  if (age<0){throw new Error ('Age cannot be negative');}
  else {
    return new Date().getFullYear() - age;
  }
}

function createGreeting (name, age){
  if(name === undefined || age === undefined){
    throw new Error ('Invalid Arguement');
  }
  else if(typeof name !== 'string' || typeof age !=='number'){
    throw new TypeError();
  }
  else{
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.`;
  }
}

try{
  const greeting1 = createGreeting(5,'Angel');
  console.log(greeting1);
} 
catch(e){
  console.log(e);
}

