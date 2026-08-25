//Part A

//Task 1
var Fullname = "Ahmed Ali";
var count = Fullname.length;
console.log(count);

//Task 2
var sentence = "I am learning JavaScript";
var sentence1 = sentence.toUpperCase();
console.log(sentence1);
var sentence2 = sentence.toLowerCase();
console.log(sentence2);

//Task 3
var email = "student@nti.com";
var checkEmail = email.includes("@");
console.log(checkEmail);

//Task 4
var word = "JavaScript";
var firstChar = word.charAt(0);
console.log(firstChar);
var lastChar = word.charAt(word.length - 1);
console.log(lastChar);

//Task 5
var phrase = "This is a bad day";
var replacedPhrase = phrase.replace("bad", "good");
console.log(replacedPhrase);

//Task 6
var newSentence = "I love coding";
var newSentence1 = newSentence.split(" ");
console.log(newSentence1);
var newSentence2 = newSentence1.join("-");
console.log(newSentence2);

//Task 7
var text = " nti egypt training ";
var text1 = text.trim();
console.log(text1);
var text2 = text1.toUpperCase();
console.log(text2);
var text3 = text2.replace("EGYPT", "CAIRO");
console.log(text3);

//Part B

//Task 8
var string = "45.8";
var number = parseFloat(string);
console.log("Number:", number);

//Task 9
var num = 7.6;
console.log("Round:",Math.round(num));
console.log("Floor:",Math.floor(num));
console.log("Ceil:",Math.ceil(num));

//Task 10
console.log("Max:",Math.max(12, 5, 28, 9));
console.log("Min:",Math.min(12, 5, 28, 9));

//Task 11
console.log("Random number between 1 and 20:",Math.floor(Math.random() * 20) + 1);

//Task 12
var price = 19.4567;
console.log("Price with 2 decimal places:",price.toFixed(2));

//Task 13
var generatedNumbers = [];
for (var i = 1; i <= 5; i++) {
  var randomNum = Math.floor(Math.random() * 50) + 1;
  generatedNumbers.push(randomNum);
  console.log("Random number between 1 and 50:", randomNum);
}
var largest = generatedNumbers[0];
var smallest = generatedNumbers[0];
var sum = 0;

for (var j = 0; j < generatedNumbers.length; j++) {
  if (generatedNumbers[j] > largest) {
    largest = generatedNumbers[j];
  }
  if (generatedNumbers[j] < smallest) {
    smallest = generatedNumbers[j];
  }
  sum += generatedNumbers[j];
}

var average = sum / generatedNumbers.length;

console.log("Largest:", largest);
console.log("Smallest:", smallest);
console.log("Average:", average.toFixed(2));

//Part C

//Task 14
for (var j = 1; j <= 20; j++) {
  console.log(j);
}

//Task 15
for(var k = 1; k <=15; k++) {
  if(k % 2 != 0) {
    console.log(k);
  }
}

//Task 16
var n = 10;
while(n >= 1) {
  console.log(n);
  n--;
}

//Task 17
var array = ["Sara", "Omar", "Mona", "Youssef"];
for (var item of array){
  console.log(item);
}

//Task 18
for (var m = 1; m<=10; m++){
  if(m == 7){
    break;
  }
  console.log(m);
}

//Task 19
for (var l = 1; l <= 3; l++) {
    for (var h = 1; h <= 10; h++) {
        console.log(l + " * " + h + " = " + (l * h));
    }
}

//Task 20

for (var x = 1; x <= 30; x++){
  if(x%3 == 0){
    continue;
  }

  if(x == 25){
    break;
  }

  console.log(x);
}

//Part D

//Task 21

var hello = "HELLO"
for(var letter of hello){
  console.log(letter);
}

//Task 22

var arr = [10, 20, 30 ,40];
var sum1 = 0;
for(var elements of arr){
 sum1 += elements;
}
console.log(sum1);

//Task 23
var sentence1 = "JavaScript is amazing and awesome";
var count = 0;

for (var initial of sentence1) {
    if (initial.toLowerCase() === "a") {
        count++;
    }
}

console.log(count);

//Task 24
var arr2 = [70, 85, 92, 60, 77, 88];
for(var elem of arr2){
  if(elem%2 == 0){
    console.log(elem);
  }
}

//Task 25
for (var s = 1; s <= 3; s++) {
    var stars = "";

    for (var c = 1; c <= s; c++) {
        stars += "*";
    }

    console.log(stars);
}

//Task 26

var students = ["ahmed", "sara", "omar", "laila", "hassan"];
var count1 = 0;

for (var student of students) {
    var upperName = student.toUpperCase();

    if (upperName.startsWith("A") || upperName.startsWith("S")) {
        console.log(upperName);
        count1++;
    }
}

console.log("Number of matches:", count1);
