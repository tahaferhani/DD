var buttons = document.querySelectorAll(".btn");
buttons.forEach(function (btn) {
    btn.addEventListener("mouseenter", function (event) {
        event.target.classList.add("hover");
    });

    btn.addEventListener("mouseleave", function (event) {
        event.target.classList.remove("hover");
    });
});

var circle = document.getElementById("circle");
document.addEventListener("mousemove", function (event) {
    circle.style.top = event.clientY;
    circle.style.left = event.clientX;
});
