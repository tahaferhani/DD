var list = document.querySelector("ul");
var input = document.querySelector("input");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    li.addEventListener("click", ajouterElement);
    list.appendChild(li);
    input.value = "";
});

var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", ajouterElement);
}

function ajouterElement(event) {
    event.target.remove();
}

// listItems.forEach(li => {
//     li.addEventListener("click", function (event) {
//         event.target.remove();
//     });
// });
