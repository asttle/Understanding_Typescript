// Working with Types
//number, string, boolean, object, array, tuple, enum, any

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

console.log(add(number1, number2));

//objects

const person: {
  name: string;
  age: number;
} = {
  name: "Asttle",
  age: 25,
};

console.log(person.name);

// array

const employee_details: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Asttle",
  age: 30,
  hobbies: ["games", "music"],
};

console.log(employee_details.hobbies);

//Tuples
// setting array with restricted number of elements

const business: {
  business_name: string;
  role: [number, string];
} = {
  business_name: "ABC",
  role: [1, "Developer"],
};

business.role.push("HR"); // exception it should not be but it allows. Atleast it restricts type
console.log(business.role);

//ENUM
enum Role {
  ADMIN,
  DEVELOPER,
  NORMAL_USER,
} // by default it assigns value from 0 and increments
enum ValueAssign {
  value1 = 5,
  value2 = 20,
  value3 = 30,
} // we can define customvalues
enum DiffTypes {
  name = "Asttle",
  age = 25,
} // we can define values of different types

//any
let favorites: any[]; // it can be of any type
// maximum try to avoid this

//Union Types
// pass 2 types of inputs for functions
//function that adds if number or concats if string
function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combineages = combine(30, 26);
const combinenames = combine("Max", "millian");

//Literal types
// for an argument if you want to allow only n values for a type then we can use literals
function combineAnyData(
  n1: number | string,
  n2: number | string,
  resultType: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultType === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinenumber = combineAnyData(30, 20, "as-number");
const combineStringwithnumbervalues = combineAnyData("30", "20", "as-number");
const combineText = combineAnyData("Asttle", "Joseph", "as-text");

//TypeAliases
type Combineable = number | string;
type TypeDescriptor = "as-number" | "as-text";

function combineWithAlias(
  n1: Combineable,
  n2: Combineable,
  resultType: TypeDescriptor
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultType === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

// function return types
// explicitly mention the return type of the function
function addition(n1: number, n2: number): number {
  return n1 + n2;
}
// by default if function doent return anything it will considered void
function printResult(result: number) {
  console.log("Result", result);
}

// Function as Types
let addVariable;
addVariable = addition;
console.log(addVariable(5, 10)); // problem is addVariable is any type so in future if addVariable is assigned another value we will get runtime error

let addFunction: Function;
addFunction = addition;
console.log(addVariable(5, 10)); // eventhough it restricts to function we can define any function to addFunction. So we will not get desired result and desired function executed

let addFunctionType: (a: number, b: number) => number; // we can assign a function which accpets 2 numbers and return a numnber
addFunctionType = addition;

//Function Types and callbacks

function addAndHandleCallback(
  n1: number,
  n2: number,
  cb: (num: number) => void
) {
  const result = n1 + n2;
  cb(result);
}

addAndHandleCallback(20, 30, (result) => {
  console.log(result);
});

// unknown type
let userInput: unknown;
let userName: string;
userInput = "Asttle";
//even though userinput holds a string it cannot be assigned to username.t is a strict version of any type
// so we need to typecheck before assigning, so only unkown is recommended for any
if(typeof userInput === 'string')
userName = userInput;

//never type
//common use case of never type is an error function
function generateError(message: string, code: number): never {
  throw ({message: message, errorCode: code});
}

generateError('Something went wrong!', 500);
// console.log('crashed') // this console log will never be executed because app will crash when throw error. So assign never to function to clarify it