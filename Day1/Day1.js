//Task 1
console.log("JS is running successfully");

//Task 2
window.alert("Ready to practice!");

//Task 3
var productName = "Laptop";
var price = 15000;
var isAvailable = true;

console.log(productName);
console.log(price);
console.log(isAvailable);

console.log(typeof productName);
console.log(typeof price);
console.log(typeof isAvailable);

//Task 4
document.getElementById("mainTitle").innerText = "Practice Time";

//Task 5
var city = "Cairo";
var country = "Egypt";
var result = city + "," + " " + country;
console.log(result);

//Task 6
var result2 = `Location: ${city} - ${country}`;
console.log(result2);

//Task 7
var itemPrice = 120;
var quantity = 3;

var total = itemPrice * quantity;        
var difference = 400 - total;            
var product = itemPrice * quantity;      
var division = itemPrice / quantity;     
var remainder = itemPrice % quantity;    
var power = quantity ** 2;   

console.log("Total: ",  total);
console.log("Difference: ",  difference);
console.log("Product: ",  product);
console.log("Division: ",  division);
console.log("Remainder: ",  remainder);
console.log("Power: ",  power);

//Task 8
var COLOR = window.prompt("Please enter your favorite color:");
console.log("Your favorite color is: ", COLOR);

//Task 9
var score = 20;
var textScore = "20";

console.log(score == textScore);  //Checks for equality of values, ignoring type
console.log(score === textScore); //Checks for equality of values and type

//Task 10
var number = window.prompt("Please enter a number:");

var num1 = Number(number);
console.log("The number you entered is: ", num1);
var num2 = parseInt(number);
console.log("The number you entered is: ", num2);
var num3 = +number;
console.log("The number you entered is: ", num3);

//Task 11
var fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); 
fruits[1] = "orange";
fruits.push("grape");
console.log(fruits);

//Task 12
var course = {level: "Beginner", hours: 20, title: "JavaScript"};
course.title = "Advanced JavaScript";
console.log(course.hours);
console.log(course);

//Task 13
var hasAccount = true;
var isVerified = false;

console.log(hasAccount && isVerified); 
console.log(hasAccount || isVerified); 
console.log(!isVerified); 

//Task 14
var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log(balance);

//Task 15
var hotel = window.prompt("Please enter the hotel name:");
var nights = window.prompt("Please enter the number of nights:");
var confirmed = window.prompt("Please confirm your booking (yes/no):");
var message = `Hotel: ${hotel}\nNights: ${nights}\nBooking Confirmed: ${confirmed}`;
window.alert(message);
console.log(message);

//Task 16
console.log(2 + 8 + "0"); //Expected output: "100" 
console.log("2" + 8 + 0); //Expected output: "280"
console.log(2 + "8" + 0); //Expected output: "280"

//Task 17
var city1 = "Alex"; 
var city2 = city1; 
city2 = "Giza"; 
console.log(city1, city2); //city2 was assigned with the value of city1, but then it was changed to "Giza", so city1 remains "Alex" and city2 is now "Giza".

var car1 = { brand: "Toyota" };
var car2 = car1; 
car2.brand = "Honda"; 
console.log(car1, car2);

var car3 = Object.assign({}, car1);
car3.brand = "BMW";
console.log(car1, car3);

//Task 18
var mixedBag = [42, null, , "hello", true, { name: "John" }, [1, 2, 3]];
console.log(typeof mixedBag[0]);
console.log(typeof mixedBag[1]);//output: "object" because null is considered an object in JavaScript
console.log(typeof mixedBag[2]); 
console.log(typeof mixedBag[3]); 
console.log(typeof mixedBag[4]); 
console.log(typeof mixedBag[5]); 
console.log(typeof mixedBag[6]); 

//Task 19
var clientName = window.prompt("Please enter your name:");
var requestPrice = window.prompt("Please enter the request price:");
var confirmation = window.prompt("Please confirm your request (yes/no):");

var rPrice = Number(requestPrice);
var paymentStatus = confirmation.toLowerCase() === "yes" ? "done" : "Not yet";

var message = `Client Name: ${clientName}
Request Price: ${rPrice}
Payment Status: ${paymentStatus}`;

console.log(message);
window.alert(message);
document.getElementById("result").innerText = message;

//Task 20
var num1 = Number(window.prompt("Please enter the first number:"));
var num2 = Number(window.prompt("Please enter the second number:"));

console.log(num1 + " + " + num2 + " = " + (num1 + num2));
console.log(num1 + " - " + num2 + " = " + (num1 - num2));
console.log(num1 + " * " + num2 + " = " + (num1 * num2));
console.log(num1 + " / " + num2 + " = " + (num1 / num2));
console.log(num1 + " % " + num2 + " = " + (num1 % num2));
console.log(num1 + " ** " + num2 + " = " + (num1 ** num2));


//Task 21
var item = window.prompt("Enter item:");
var qty = Number(window.prompt("Enter quantity:"));
var paid = window.confirm("Is it paid?");

console.log("Invoice => Item: " + item +" | Qty: " + qty +" | Paid: " + paid);


//Task 24
var a = "15";
var b = 15;
var c = null;
var d;
var e = [15];
var f = { value: 15 };

console.log("a:", a, typeof a, a == 15, a === 15);
console.log("b:", b, typeof b, b == 15, b === 15);
console.log("c:", c, typeof c, c == 15, c === 15);
console.log("d:", d, typeof d, d == 15, d === 15);
console.log("e:", e, typeof e, e == 15, e === 15);
console.log("f:", f, typeof f, f == 15, f === 15);

//Task 25
// Input
var ProductName = prompt("Enter product name:");
var brand = prompt("Enter brand:");
var Price = Number(prompt("Enter price:"));
var category = prompt("Enter category:");

var inStock = confirm("Is this product in stock?");

// Processing
var productInfo = {
  productName: ProductName,
  brand: brand,
  price: Price,
  category: category,
  inStock: inStock
};

var message = `Product: ${ProductName}Brand: ${brand}Price: ${Price}Category: ${category}In Stock: ${inStock}`;

alert(message);

console.log(productInfo);

document.getElementById("mainTitle").innerText = ProductName;

document.getElementById("result").innerText = message;