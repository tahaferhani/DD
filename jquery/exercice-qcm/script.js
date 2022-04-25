$("#btn").click(function () {
    var note = 0;

    $(".question").each(function (i, question) {
        var checkedInput = $(question).find("input:checked");
        if (checkedInput.length == 0) {
            $(question).find("p").addClass("orange");
            return;
        }

        if (checkedInput.val() == "1") {
            checkedInput.parent().addClass("green");
            note++;
        } else {
            checkedInput.parent().addClass("red");
            $(question).find("input[value=1]").parent().addClass("green");
        }
    });

    $("#note").text(note);
});
