var btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    console.log("Test");
});

var btn = $("#btn");
btn.click(function () {
    console.log("Test");
});

btn.on("click", function () {
    console.log("Test");
});
