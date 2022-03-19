var inp1 = document.querySelector("#nb1");
var inp2 = document.querySelector("#nb2");
var btn = document.querySelector("#btn");
var result = document.querySelector("#result");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    
    var total = parseInt(inp1.value) + parseInt(inp2.value);
    result.innerHTML = total;
    result.style.color = total < 10 ? "red" : "blue";
})