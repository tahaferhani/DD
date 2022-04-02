var list = document.querySelector("ul");
var input = document.querySelector("input");
var btn = document.querySelector("button");
btn.addEventListener("click", function () {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    li.addEventListener("click", onClick);
    list.appendChild(li);
    input.value = "";
});

var listItems = document.querySelectorAll("li");
listItems.forEach(li => {
    li.addEventListener("click", onClick);
});

function onClick(event) {
    event.target.remove();
}
