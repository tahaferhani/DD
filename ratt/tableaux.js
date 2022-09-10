// JAVASCRIPT ARRAY FUNCTIONS

var arr = [1, 2, 3, 4];

// var result = arr.filter(val => {
//     return val % 2 == 0; //true;
// });

var result = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) result.push(arr[i]);
}
console.log(result);

// var result = arr.filter(val => val % 2 == 0);

// var result = arr.find(val => {
//     return val % 2 == 0;
// });
// console.log(result);

// var result = arr.map(val => {
//     if (val % 2 == 0) {
//         return val * 2;
//     }
//     else {
//         return val;
//     }
//     //return val % 2 == 0 ? val * 2 : val;
// });
// console.log(result);

// arr.forEach((val, i) => {
//     console.log(i);
// });

// console.log(arr.includes(2));

// var result = arr.join("#");
// console.log(result);

// var str = "t.e.s.t";
// console.log(str.split("."));

// var result = arr.slice(0, 2);
// console.log(result);

// var str = "test";
// console.log(str.slice(0, 2));

// var result = arr.reduce((total, val) => {
//     return total + val;
// });
// console.log(result);
