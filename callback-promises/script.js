// function addition(n1, n2, func) {
//     setTimeout(function () {
//         var total = n1 + n2;
//         func(total);
//     }, 2000);
// }

// function result(total) {
//     console.log(total);
// }

// addition(10, 20, result);

// PROMISES
function addition(n1, n2) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var total = n1 + n2;
            resolve(total);
        }, 2000);
    });
}

// addition(10, 20).then(function (total) {
//     console.log(total);
// });

async function getTotal() {
    var total = await addition(10, 40);
    console.log(total);
    console.log("test");
}

getTotal();
