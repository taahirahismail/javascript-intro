// From the first task thingy (lecture 1.4 or something)
document.write('Hello World' + '<br/>');
document.write(2+2 + '<br/>' +'<br/>')
function myFunction2() {
    alert('This is the browsers alert box.')
}

function myFunction() {
    alert("Hello! My name is Taahirah!!")
}

// variables and constants
let n = 5;
console.log(n);

let z = 'poop';
console.log(z);

const interestRate = 0.3;
console.log(interestRate);

// that other thing Oslin said to do suma one time
const person = {name: 'Timothy', surname: 'Barry', occupation: 'Idiot', age: 12, gender: 'Ask Jesus'};
let {name, surname, occupation, age, gender} = person;
console.log(name);
console.log(surname);
console.log(occupation);
console.log(age);
console.log(gender);

let a, b, c; a=b=c=0;
c--;
document.write("the value of a is :", a + "<br/>");
document.write("the value of a is :", b + "<br/>");
document.write("the value of a is :", c + "<br/><br/>");

// data types
let str = "Hello There";
let str2 = 'Single quotes works fine';
let phrase = 'can embed ${str}';
let isApproved = true;

let person2 = {name: 1, age: 30, isUser: true, firstName: undefined, selectedColor: null};

// objects and arrays
let person3 = {name: 'John', age: 30};
console.log(person3);
person3.name = 'Mark';
console.log(person3.name);

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 1;
console.log(selectedColors.length);

// day 2 lms exercises
let myName = 'Taahirah';
let mySurname = 'Ismail';
document.write(myName + mySurname);
let numberVar = 5;
// output is 25
const myName2 = 'Taahirah';
// syntax error - says the identifier has already been declared 

// day 3 lms exercises
var str3 = 'a string ig';
// typeof - string
var str3 = 2;
// typeof - number
let vstring = 'string';
let vnumber = 1;
let vboolean = true;
let vundefined = undefined;
let vnull = null;
let vsymbol = Symbol('not sure mate');
let vobj = {name: 'an object', num: 12};
let varray = ['obj1', 'obj2'];
let vfunc = function myFunction3() {prompt('girl what')};