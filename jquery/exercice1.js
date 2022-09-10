$("#center").mouseenter(function () {
    console.log("Attention, vous entrez dans la zone rouge");
});

$("#center").mousedown(function () {
    $(this).css("border-color", "green");
    $("#header").text("UP");
});

$("#center").mouseup(function () {
    $(this).css("border-color", "red");
    $("#footer").text("DOWN");
});

$("#header, #footer").click(function () {
    $(this).empty();
});
