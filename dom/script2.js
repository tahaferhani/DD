var listItems = document.querySelectorAll("li");

listItems.forEach(item => {
    item.addEventListener("click", (event) => {
        // Nouvelle fonction "remove()"
        // event.target.remove();
        var elem = event.target;
        var parent = elem.parentElement;
        parent.removeChild(elem);
    })
})

var ul =  document.querySelector("ul");
var li = document.createElement("li");
li.innerHTML = "Test";
ul.appendChild(li);

// FOR
// for (var i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", function() {
//         console.log("Test");
//     })
// }

// FOREACH
// listItems.forEach(function(item) {
//     item.addEventListener("click", function() {
//          console.log("Test");
//     })
// })