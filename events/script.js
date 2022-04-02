var buttons = document.querySelectorAll(".btn");
buttons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        var form = event.target.parentElement;
        var input = form.querySelector(".inp");
        console.log(input.value);
    });
});
