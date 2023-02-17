// Working with Types
//number, string, boolean, object, array, tuple, enum, any
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
console.log(add(number1, number2));
//objects
var person = {
    name: "Asttle",
    age: 25
};
console.log(person.name);
// array
var employee_details = {
    name: "Asttle",
    age: 30,
    hobbies: ["games", "music"]
};
console.log(employee_details.hobbies);
//Tuples
// setting array with restricted number of elements
var business = {
    business_name: "ABC",
    role: [1, "Developer"]
};
business.role.push("HR"); // exception it should not be but it allows. Atleast it restricts type
console.log(business.role);
//ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["DEVELOPER"] = 1] = "DEVELOPER";
    Role[Role["NORMAL_USER"] = 2] = "NORMAL_USER";
})(Role || (Role = {})); // by default it assigns value from 0 and increments
var ValueAssign;
(function (ValueAssign) {
    ValueAssign[ValueAssign["value1"] = 5] = "value1";
    ValueAssign[ValueAssign["value2"] = 20] = "value2";
    ValueAssign[ValueAssign["value3"] = 30] = "value3";
})(ValueAssign || (ValueAssign = {})); // we can define customvalues
var DiffTypes;
(function (DiffTypes) {
    DiffTypes["name"] = "Asttle";
    DiffTypes[DiffTypes["age"] = 25] = "age";
})(DiffTypes || (DiffTypes = {})); // we can define values of different types
//any
var favorites; // it can be of any type
// maximum try to avoid this
//Union Types
// pass 2 types of inputs for functions
//function that adds if number or concats if string
function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineages = combine(30, 26);
var combinenames = combine("Max", "millian");
//Literal types
// for an argument if you want to allow only n values for a type then we can use literals
function combineAnyData(n1, n2, resultType) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultType === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinenumber = combineAnyData(30, 20, "as-number");
var combineStringwithnumbervalues = combineAnyData("30", "20", "as-number");
var combineText = combineAnyData("Asttle", "Joseph", "as-text");
function combineWithAlias(n1, n2, resultType) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultType === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
// function return types
// explicitly mention the return type of the function
function addition(n1, n2) {
    return n1 + n2;
}
// by default if function doent return anything it will considered void
function printResult(result) {
    console.log("Result", result);
}
// Function as Types
var addVariable;
addVariable = addition;
console.log(addVariable(5, 10)); // problem is addVariable is any type so in future if addVariable is assigned another value we will get runtime error
var addFunction;
addFunction = addition;
console.log(addVariable(5, 10)); // eventhough it restricts to function we can define any function to addFunction. So we will not get desired result and desired function executed
var addFunctionType; // we can assign a function which accpets 2 numbers and return a numnber
addFunctionType = addition;
//Function Types and callbacks
function addAndHandleCallback(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandleCallback(20, 30, function (result) {
    console.log(result);
});
// unknown type
var userInput;
var userName;
userInput = "Asttle";
//even though userinput holds a string it cannot be assigned to username.t is a strict version of any type
// so we need to typecheck before assigning, so only unkown is recommended for any
if (typeof userInput === 'string')
    userName = userInput;
//never type
//common use case of never type is an error function
function generateError(message, code) {
    throw ({ message: message, errorCode: code });
}
generateError('Something went wrong!', 500);
// console.log('crashed') // this console log will never be executed because app will crash when throw error. So assign never to function to clarify it
