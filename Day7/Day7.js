//Part A

//Task 1
function assignment(){
  NoDeclaration = "Not declared";
}
assignment();
console.log(NoDeclaration);// Not declared was printed in the console

//Task 2
function assignmentStrict(){
  "use strict";
  try{
  NoDeclaration2 = "Not declared second time";
  }catch(err){
    console.log(err.message);
  }
}
assignmentStrict();

//Task 3
"use strict";
function testDelete() {
  var localVar = "test";
  try {
    delete this.localVar;
  } catch(err) {
    console.log(err.message);
  }

  var obj = { prop: "value" };
  delete obj.prop; 
  console.log(obj);
}
testDelete();

//Part B

//Task 4 
console.log(x); //prediction: undefined. Reason-> var is hoisted as undefined
var x = 10;
 console.log(x);//prediction: 10

//Task 5
// Case 1
  sayHi(); //Prediction Hi. Reason-> Function declaration are hoisted
  function sayHi(){
  console.log("Hi"); 
  }
// Case 2 
 //sayBye();  Prediction: error.Reason-> var is hoisted as undefined and its caling as a function gives error
 //var sayBye = function (){
 //console.log("Bye"); 
 //};

 // Task 6
//try {
//console.log(a);
//} catch (err) {
//console.log(err.message); // Prediction:Cannot access 'a' before initialization
//}
//let a = 5;

// Task 7
var n = 1; 
function demo() {  
  console.log(n);//Prediction: undefined
  var n = 2;  
  console.log(n);//Prediction: 2
 } 
demo(); 
console.log(n);//Prediction: 1

//Part C 

//Task 8
function testVarScope() {
  if (true) {
    var functionScoped = "Function Scope";
  }
  console.log(functionScoped); 
}
testVarScope();

//Task 9
function testLetScope() {
  if (true) {
    let blockScoped = "Block Scope";
    console.log(blockScoped);
  }
  try {
    console.log(blockScoped); 
  } catch (err) {
    console.log(err.message);
  }
}
testLetScope();

//Task 10
var x1 = 1;
var x1 = 2; 
console.log(x1); // 2

let y1 = 1;
// let y1 = 2; // Error: Identifier 'y1' has already been declared
console.log(y1);

//Task 11
const student = { name: "Ali", age: 20, city: "Cairo" };

student.age = 21;
console.log(student);

student.grade = "A";
console.log(student);

delete student.city;
console.log(student);

try {
  student = { name: "New" }; // Error 
} catch (err) {
  console.log(err.message);
}


//Task 12
const nums = [1, 2, 3];
nums.push(4);   //allowed    
nums[0] = 100;    //allowed    
console.log(nums);

try {
  nums = [5, 6, 7]; //not allowed 
} catch (err) {
  console.log(err.message);
}

//Task 13
var a13; //undefined
console.log(a13);

let b13; // undefined
console.log(b13);

try {
  eval("const c13;"); // Error 
} catch (err) {
  console.log(err.message);
}

//Task 14
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log(window.g1); // "var global"
console.log(window.g2); // undefined
console.log(window.g3); // undefined


//Task 15
const handlers = {};
for (let i = 0; i < 3; i++) {
  handlers["fn" + i] = function () {
    return "index: " + i;
  };
}
console.log(handlers.fn0()); // "index: 0"
console.log(handlers.fn2()); // "index: 2"

//Part D

//Task 16
const welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Sara"));

//Task 17
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Ali", "Hassan", 25));

//Task 18
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

const sumWithLog = (a, b) => {
  console.log(a, b);
  return a + b;
};
console.log(sumWithLog(3, 7));

//Part E

//Task 19
const product = { title: "Laptop", price: 15000, inStock: true, brand: "Dell" };
const { title, price, inStock } = product;
console.log(title, price, inStock);

//Task 20
const techList = ["HTML", "CSS", "JS", "React"];
const [first, second] = techList;
console.log(first, second);

//Task 21
function greet(name = "Guest", message = "Hello") {
  return `${message}, ${name}!`;
}
console.log(greet("Ali", "Hi"));  // "Hi, Ali!"
console.log(greet("Ali"));         // "Hello, Ali!"
console.log(greet());              // "Hello, Guest!"

//Task 22
function sumAll(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
console.log(sumAll(1, 2, 3));         // 6
console.log(sumAll(10, 20, 30, 40));  // 100

//Task 23
const merged = [...[1, 2], ...[3, 4, 5]];
console.log(merged); // [1, 2, 3, 4, 5]

const originalArr = [10, 20, 30];
const copyArr = [...originalArr];
copyArr.push(40);
console.log(originalArr); // [10, 20, 30]
console.log(copyArr);     // [10, 20, 30, 40]

//Task 24
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const merged2 = { ...user, ...contact };
console.log(merged2); // { name: "Sara", age: 23, email: "sara@nti.com" }
// age 23 wins beacuse the spread operator overwrites the property before it

//Task 25
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
  return a + b + c + d;
}
console.log(total(...values)); // 20

//Part F

//Task 26
let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";
console.log(person1.name); // "Omar"
// objects are copied by reference, any change in person1 or person2 points to the same value

// Task 27
const original = { name: "Mona", details: { city: "Cairo" } };
const shallowCopy = { ...original };

shallowCopy.name = "Laila";
shallowCopy.details.city = "Giza";

console.log(original); // { name: "Mona", details: { city: "Giza" } }
console.log(shallowCopy); // { name: "Laila", details: { city: "Giza" } }
// name only changed in shallowCopy, not in original. That's because name is a string
//But details.city changed in both original and shallowCopy

//28. Deep copy
const original2 = { name: "Mona", details: { city: "Cairo" } };
const deepCopy = JSON.parse(JSON.stringify(original2));

deepCopy.details.city = "Alex";

console.log(original2); // { name: "Mona", details: { city: "Cairo" } } - لم يتغير
console.log(deepCopy);  // { name: "Mona", details: { city: "Alex" } }


//Task 29
const userData = { name: "Ahmed", age: 26, city: "Alex" };
localStorage.setItem("userdata", JSON.stringify(userData));

const stored = localStorage.getItem("userdata");
const parsedData = JSON.parse(stored);

console.log(typeof parsedData); // "object"
console.log(parsedData);
console.log(parsedData.name, parsedData.age, parsedData.city);

localStorage.removeItem("userdata");
console.log(localStorage.getItem("userdata")); // null

//Part G

//Task 30
const APP_CONFIG = {
  name: "MyApp",
  version: "1.0.0",
  api: {
    baseUrl: "https://api.example.com",
    timeout: 5000
  },
  features: ["dark-mode", "notifications"]
};

APP_CONFIG.api.timeout = 8000;
APP_CONFIG.features.push("offline-mode");
console.log(APP_CONFIG);

try {
  APP_CONFIG = {}; // prohibited
} catch (err) {
  console.log(err.message);
}

//Task 31
function createCard(title, price = 0, ...tags) {
  return {
    title: title,
    price: price,
    tags: tags,
    label: `${title} - ${price} EGP`
  };
}

const card1 = createCard("Laptop", 15000, "electronics", "sale");
const card2 = createCard("Notebook");

console.log(card1);
console.log(card2);

//Task 32
const students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];

students.forEach(({ name, grade }) => {
  console.log(`${name} scored ${grade}`);
});

// or with map:
const results = students.map(({ name, grade }) => `${name} scored ${grade}`);
console.log(results);