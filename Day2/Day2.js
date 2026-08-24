//Task 1
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

//Task 2
for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}

//Task 3
var sum = 0;
for (var i = 1; i <= 15; i++) {
  sum += i;
}
console.log("Total sum = ", sum);

//Task 4
var i = 1;
while (i <= 7) {
  console.log(i);
  i++;
}

//Task 5
var i = 8;
while (i >= 1) {
  console.log(i);
  i--;
}

//Task 6
var userData = null;
var i = 0;

do {
  console.log("WELCOME");
  i++;
} while (userData == null && i < 1);

var number = 1;

do {
  console.log(number);
  number++;
} while (number <= 5);

//Task 7

var itemsInCart = 10;
var i = itemsInCart;
while (i < 5) {
  console.log("While");
  i++;
}//Will not work because the condition is false, so the loop will not execute.

var j = itemsInCart;
do {
  console.log("Do...While");
  j++;
} while (j < 5);//Will work because the do...while loop executes the code block once before checking the condition, so it will print "Do...While" once even though the condition is false.

//Task 8
var person = {
  userName: "Ali",
  userAge: 22,
  isStudent: true
};

console.log(typeof person.userName);
console.log(typeof person.userAge);
console.log(typeof person.isStudent);

//Task 9
var dbPrice = 10;
var inputPrice = "10";

console.log(dbPrice == inputPrice);  //Checks for equality of values, ignoring type
console.log(dbPrice === inputPrice); //Checks for equality of values and type

//Task 10
var userName = window.prompt("Please enter your name:");
window.alert(`Welcome, ${userName}!`);
console.log(`Welcome, ${userName}!`);

//Task 11
var num = window.prompt("Please enter a number:");

var num1 = Number(num);
console.log("The number you entered is: ", num1);
var num2 = parseInt(num);
console.log("The number you entered is: ", num2);
var num3 = +num;
console.log("The number you entered is: ", num3);

//Task 12
var a = 10;
var b = 3;

console.log("Addition: ", a + b);
console.log("Subtraction: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Division: ", a / b);
console.log("Remainder: ", a % b);
console.log("Exponentiation: ", a ** b);

//Task 13
var age = prompt("Please enter your age:");
if (age >= 18) {
  console.log("You can enter.");
} else {
  console.log("Sorry, underage.");
}

//Task 14
var grade = 71;
switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

//Task 15
var userAge = window.prompt("Please enter your age:");
var result = (userAge >= 18) ? "Adult" : "Minor";
console.log(result);

//Task 16
var day = window.prompt("Please enter a day of the week:");
switch (day.toLowerCase()) {
  case "monday":
    console.log("Start of the work week.");
    break;
  case "tuesday":
    console.log("Second day of the work week.");
    break;
  case "wednesday":
    console.log("Midweek.");
    break;
  case "thursday":
    console.log("Almost the weekend.");
    break;
  case "friday":
    console.log("Last day of the work week.");
    break;
  case "saturday":
    console.log("Weekend!");
    break;
  case "sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Invalid day.");
    break;
}

//Task 17
var unitPrice = window.prompt("Please enter the unit price:");
for (var quantity = 1; quantity <= 10; quantity++) {
  var totalPrice = unitPrice * quantity;
  console.log(`Quantity: ${quantity}, Total Price: ${totalPrice}`);
}

//Task 18
var fileSize = window.prompt("Please enter the file size in MB:");
if (fileSize > 0) {
  for (var i = 1; i <= fileSize; i++) {
    console.log(`${i} MB`);
  }
} else {
  console.log("Invalid file size.");
}

//Task 19
var startNum = Number(window.prompt("Please enter the starting number:"));
var endNum = Number(window.prompt("Please enter the ending number:"));

for (var i = startNum; i <= endNum; i++) {
  if (i % 2 == 0) {
    console.log("Express", i);
  }
  else {
    console.log("Normal", i);
  }
}

//Task 20
var array = ["hana", "ali", "ahmed", "mohamed"];
for (var i = 0; i < array.length; i++) {
  console.log("Student", i + 1, ":", array[i]);
}

//Task 21
var sum = 0;
for (var i = 1; i <= 5; i++) {
  var price = Number(window.prompt(`Please enter the price for item ${i}:`));
  sum += price;
}
console.log("Total sum:", sum);
console.log("Average price:", sum / 5);

//Task 22
var correctPin = "1234";
var attempts = 0;
var enteredPin = "";
var success = false;

while (attempts < 3) {
  enteredPin = prompt("Enter your PIN:");
  attempts++;

  if (enteredPin === correctPin) {
    success = true;
    break;
  } else {
    console.log("Try again, Number of attempts left: " + (3 - attempts));
  }
}

if (success) {
  console.log("Success");
} else {
  console.log("Failure");
}

//Task 23
var hasAccount = true;
var isVerified = false;

console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!hasAccount);
console.log(!isVerified);

if (hasAccount && isVerified == true) {
  console.log("welcome back!");
} else if (hasAccount || isVerified == false) {
  console.log("Please verify your account.");
} else {
  console.log("Please sign up.");
}

//Task 24
var a = 40;
var b = 50;
var c = Number("60");
var d = 30;
var e = 30;
var opeartionResult = a + b + c + d + e;
console.log("The result of the operation is: ", opeartionResult);

if (opeartionResult >= 20) {
  console.log("Too big to print line by line");
} else {
  for (var i = 1; i <= opeartionResult; i++) {
    console.log(i);
  }
}

//Task 25
var n = Number(prompt("Enter n:"));

if (n < 0) {
  console.log("Enter a positive number");
} else {
  var factorial = 1;

  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }
  var message = n + "! = " + factorial;
  console.log(message);

}