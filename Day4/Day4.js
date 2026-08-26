//Part A

//Task 1
var car = {
  brand:"Mercedes",
  model:"Sclass",
  year:2026,
  color:"Navy"
};
console.log(car);

//Task 2
console.log(car.brand);
console.log(car["year"]); 

//Task 3
car.color = "Black";
car.price = "3M";
console.log(car);

//Task 4
delete car.year;
console.log(car.year);//Explanation: undefined because the year object no longer exists


//Task 5
var student = {
  "student-name" : "Sara",
   age : 20
};  
console.log(student["student-name"]);

//Task 6
var book = {
  title : "Harry Potter",
  author: {
    firstName:"JK",
    lastName:"Rowling"
  }
};
console.log(book.author.lastName);

//Task 7
var obj = { 
  name: "Ali", 
  age: 25, 
  city: "Cairo" 
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.hasOwnProperty("job"));

//Task 8
var settings = {
theme: "dark",
lang: "en"
};
Object.freeze(settings);
settings.theme = "light";
settingsfontSize = 16;
console.log(settings);//Nth happened because we froze the object settings

//Part B

//Task 9
var cities = ["Cairo", "Hurgada", "Minia", "Fayoum", "Assuit"];
console.log(cities);
console.log(cities.length);

//Task 10
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[cities.length-1]);

//Task 11
cities.push("Aswan");
console.log(cities);
cities.unshift("Sharkiya");
console.log(cities);

//Task 12
cities.pop();
console.log(cities);
cities.shift();
console.log(cities);

//Task 13 
var programming = ["HTML", "CSS", "JS", "React"];
console.log(programming.indexOf("JS"));
console.log(programming.includes("Python"));

//Task 14
var tools = ["pen", "book", "bag"];
tools.forEach(function(item,index){
  console.log(item,"item = ", index);
});

//Task 15
var colors = ["red", "green", "blue", "yellow"];
for(var color of colors){
  if(color === "blue"){
    break;
  }
  console.log(color);
};

//Task 16
var letters = ["A", "B", "C"];
letters.push("D","E");
console.log(letters);
letters.shift();
console.log(letters);
console.log(letters.length);

//Part C

//Task 17
var fruits = ["apple", "banana", "cherry"];

var upperFruits = fruits.map(function (item) {
  return item.toUpperCase();
});
console.log(upperFruits);
console.log(fruits); 

//Task 18
var numbers = [10, 55, 30, 80, 45, 90];
var greaterthan50 = numbers.filter(function(num){
  return num > 50;
});
console.log(greaterthan50);

//Task 19
var cities1 =  ["Cairo", "Giza", "Alex", "Aswan"];
var cityStartsWithA = cities1.find(function (city1) {
  return city1.startsWith("A");
});
console.log(cityStartsWithA); 

var indexOfA = cities1.findIndex(function (city1) {
  return city1.startsWith("A");
});
console.log(indexOfA);

//Task 20
var literalNumbers = ["one", "two", "three", "four", "five"];
var sliced = literalNumbers.slice(1,4);
console.log(sliced);
console.log(literalNumbers);

//Task 21
var literalNumbers1 = ["one", "two", "three", "four", "five"];
var spliced = literalNumbers1.splice(1,2);
console.log(spliced);
console.log(literalNumbers1);

//Task 22
var randomNums = [40, 100, 1, 5, 25];
var sortedrandomNums = randomNums.sort(function(a,b){
  return a-b;
});
console.log(sortedrandomNums);

//Task 23
var ages = [16, 21, 17, 19];
console.log(ages.some(function (age) { 
  return age >= 18; 
}));  
console.log(ages.every(function (age) { 
  return age >= 18; 
})); 

//Task 24
var toReduce = [5, 10, 15, 20];
var total = toReduce.reduce(function (sum, num) {
  return sum + num;
}, 0);
console.log(total); 

//Part D 

//Task 25
var arrOfStudents = [
  { name: "Omar", grade: 80 }, 
  { name: "Mona", grade: 90 }, 
  { name: "Ali", grade: 70 }];

  for (var s = 0; s < arrOfStudents.length; s++) {
  console.log(arrOfStudents[s].name, arrOfStudents[s].grade);
}

//Task 26
var highGrades = arrOfStudents
  .filter(function (student) { return student.grade >= 80; })
  .map(function (student) { return student.name; });
console.log(highGrades); 

//Task 27
var products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 25 }
];

var totalPrice = products.reduce(function (sum, product) {
  return sum + product.price;
}, 0);
console.log(totalPrice); 

//Task 28
var techs = ["js", "html", "css", "js", "react", "js"];
var jsCount = techs.filter(function (tech) { 
  return tech === "js"; }).length;
console.log(jsCount);

//Task 29
var classroom = {
  teacher: "Mr. Adam",
  students: ["Omar", "Mona", "Ali", "Sara"]
};
console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

//Task 30
var itemsList = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 }
];

var upperTitles = itemsList.map(function (item) {
  return item.title.toUpperCase();
});
console.log(upperTitles); 

var cheapItems = itemsList.filter(function (item) {
  return item.price < 30;
});
console.log(cheapItems); 

var totalOfAllPrices = itemsList.reduce(function (sum, item) {
  return sum + item.price;
}, 0);
console.log(totalOfAllPrices); 

