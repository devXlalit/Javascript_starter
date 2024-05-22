let car1 = "wagonaro";
let car2 = "lambo";
let car3 = "mustang";

let carArr = ["wagonaro", "mustang", "lambo"];
// index  - indices - position

// console.log(carArr[0] + " car hai");
// console.log(carArr[1] + " dream hai");
// console.log(carArr[2] + " budget ke bahar");

console.log("Using for loop");
for (let i = 0; i < carArr.length; i++) {
  console.log(carArr[i]);
}

console.log("Using forEach loop");

carArr.forEach((elem) => {
  console.log(elem);
});

// let arr = [2, 7, 11, 15];
// let target = 9;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] == target) {
//       console.log("target found on index: " + i + " " + j);
//     }
//   }
// }
