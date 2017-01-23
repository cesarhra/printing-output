
//Task 1

var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n------------\n\n" +
     "a + b = " + (a + b) + "\n" + 
     "a - b = " + (a - b) + "\n" + 
     " a * b = " + (a*b) + "\n" +
     " a / b = " + (a/b) + "\n" +
     "a % b = " + (a%b) + "\n" +
     "(a += b): " + (a+=b) + "\n" +
     "(a -= b): " + (a-=b) + "\n" +
     "(a *= b): " + (a*=b) + "\n" +
     "(a /= b): " + (a/=b) + "\n" +
     "(a %= b): " + (a%=b) + "\n" +
     "(a == b): " + (a==b) + "\n" +
     "(a != b): " + (a!=b) + "\n" +
     "(a > b): " + (a>b) + "\n" +
     "(a < b): " + (a<b) + "\n" +
     "(!a && !c): " + (!a&&!c) + "\n" +
     "(!a || !c): " + (!a||!c));


//Task 2

var first_name = ("Cesar Henrique");
var last_name = ("da Rocha Arrais");
var full_name = (first_name + " " + last_name);
var email = ("daro0009@algonquinlive.com");

var expression = ("My name is " + full_name + ". You can contact me at " + email + ".");

alert(expression);


// Task 3

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

console.log(numbers [0]);//first array element
console.log(numbers [4]);

var sum = numbers[0] + numbers[4];

console.log("numbers[0] + numbers[4] = " + sum);

console.log(numbers [0] + " + " + numbers [4] + " = " + (numbers[0] + numbers [4]));

if (sum % 2 == 0){
    alert((numbers [0] + " + " + numbers [4] + " = " + sum) + "\nThis is an even number!");
}
else{
    alert((numbers [0] + " + " + numbers [4] + " = " + sum) + "\nThis is an odd number!");
}
