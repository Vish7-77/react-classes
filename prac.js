// rules of the functions that the code which is after the return keyword , always be ignored by the compiler or language
// if there is no return keyword and you are storing that into a variable , that will be always be undefined
//if  you try To arithamtic functionalities anything with undefined , you will be always end up with NAN[not a number]
// if you are assigning something to a function call , cross check weather your function is returning something or not

// function callname() {
//   const total = 12 + 12 + 12 + 45;
//   return total;

//   // all these consoles will be ignored because you have already returned somethinng
//   console.log("hgsdfcghsa");
//   console.log("hgsdfcghsa");
//   console.log("hgsdfcghsa");
//   console.log("hgsdfcghsa");
//   console.log("hgsdfcghsa");
//   console.log("hgsdfcghsa");
//   console.log("hgsdfcghsa");
// }

// // this is to return multiple things
// function returnMultiple() {
//   const name = "john";
//   const age = 12;
//   return { name, age };
// }

// const { name, age } = returnMultiple();

// const addValues = () => {
//   // the function is not returning anything which turns to a undefined return
//   console.log(1 + 2 + 3);
//     // return 1 + 2 + 3;
// };

// const value = addValues(); // if we are assigning the addvalues to value 
// console.log(value); // undefined
// console.log(value+7); // NaN




// const graceMarks = 3;
// const getTotalMarks = (a, b, c, d) => {
//   const total = a + b + c + d + graceMarks;
//   const percent = (50 / total) * 100;
//   return { total, percent };
// };

// // this total marks was a number =-- but now its an objecr
// const { total, percent } = getTotalMarks(10, 20, 25, 27);
// console.log(total, percent.toFixed(2));

// const data = [
//   { name: "student001", marks: [33, 34, 32, 30, 44] },
//   { name: "student002", marks: [22, 14, 42, 20, 24] },
//   { name: "student003", marks: [10, 13, 12, 10, 14] },
// ];

// const getMystudentsMaks = (array) => {
//   array.map((ele) => {
//     const total = ele.marks.reduce((a, b) => a + b);
//     console.log(ele.name + " " + "->" + " " + total);
//   });
// };

// getMystudentsMaks(data);

// const marks = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 33];

// const allMarks  = marks.reduce((a, b) => a + b);
// console.log(allMarks);

// this is an arrow function
// const callMyname = () => {
//   console.log("i am vishal");
// };

// // // this is aLSO an arrow function
// const callWjhadName = () => {
//   console.log("i am wjhad");
// };

// this is also arrow function but its accepting a function as parameter

// const callAnyOnesName = (func) => {
//  // the accepted function will get called here
//     func();
// };

// // this callANyones name function will accept that function
// callAnyOnesName(callWjhadName)

// const addValues = (a, b) => {
//   console.log(a + b);
// };

// the values were accepted
// addValues(2,3)

// this is normal function
// function addTwoValues(a) {
//   a();
// }
// const thisIsAddFunction = () => {
//   console.log("hey this is me");
// };

// addTwoValues(thisIsAddFunction);
